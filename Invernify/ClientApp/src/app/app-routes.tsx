import React from 'react';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import HomePage from "./components/pages/home-page";
import DefaultLayoutComponent from "./components/layouts/default-layout";
import AboutPage from "./components/pages/about-page";
import Error404Page from "./components/pages/error-pages/error-404-page";
import AppPaths from "./app-paths";
import RouteWithLayout from "./components/common/route-with-layout";
import DebugPlaygroundPage from "./components/pages/debug-playground-page";
import AdminCreatePostPage from "../admin/components/pages/admin-create-post-page";
import AdminLayout from "../admin/components/layouts/admin-layout";

/**
 * Component that holds all the routes of the app.
 * @constructor
 */
const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <RouteWithLayout path='/' exact component={HomePage} layout={DefaultLayoutComponent}/>
            <RouteWithLayout path='/404' exact component={Error404Page}/>
            <RouteWithLayout path='/about' exact component={AboutPage} layout={DefaultLayoutComponent}/>
            <RouteWithLayout path='/admin/post/new' exact component={AdminCreatePostPage} layout={AdminLayout}/>
            <RouteWithLayout path='/___debug-playground___' exact component={DebugPlaygroundPage}
                             layout={DefaultLayoutComponent}/>
            <Redirect to={AppPaths.error404Page()}/>
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;