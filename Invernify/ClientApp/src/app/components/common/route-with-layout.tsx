import EmptyLayout from "../layouts/empty-layout";
import {Redirect, Route, RouteProps} from "react-router";
import React from "react";
import CanActivate from "../../../security/can-activate";
import AppPaths from "../../app-paths";

/**
 * Props for {@see RouteWithLayout}.
 */
type RouteWithLayoutProps = RouteProps & {
    /**
     * Layout that will wrap the component.
     */
    layout?: React.ComponentType<any>, // TODO: Remove all the 'any's in the file.

    /**
     * Guards to protect the route.
     */
    guards?: CanActivate[]
};

/**
 * Renders a react router's {@see Route} with a custom layout.
 *
 * It optionally accepts guards to protect the route with a redirection if any of the provided {@param guards} returns
 *  false.
 *
 * @param component - Component to render in the route.
 * @param layout - Layout that will wrap the {@param component} when rendered.
 * @param guards - Array of guards to prevent access to the route.
 * @param rest - Other props passed down to the {@see Route} component.
 * @constructor
 */
const RouteWithLayout = ({component, layout = EmptyLayout, guards = [], ...rest}: RouteWithLayoutProps) => {

    // Important to add again the 'component' element that was extracted in the destructuring above.
    const routeProps = {component, ...rest};

    const canActivate = guards.some(x => !x.canActivate(routeProps));

    return (
        <Route
            {...rest}
            render={props => canActivate ?
                <Redirect to={{pathname: AppPaths.login(), state: {from: props.location}}}/> :
                React.createElement(layout, props, React.createElement(component as React.ComponentType<any>, props))}
        />
    );
};

export default RouteWithLayout;

// TODO: Make a not authorized page similar to the 404 and 500 pages, and redirect the user there when they don't have access to a route.
// TODO: Save the requested URL before going to the login page, so when the login-callback gets hit, we known where to redirect the user.
