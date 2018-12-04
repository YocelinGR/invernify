import {RouteProps} from "react-router-dom";

/**
 * A class that implements this interface can decide whether a route can be activated.
 */
export default interface CanActivate {
    /**
     * Returns true if the route can be activated.
     *
     * @param routeProps - Props being passed to the route.
     */
    canActivate(routeProps: RouteProps): boolean;
}