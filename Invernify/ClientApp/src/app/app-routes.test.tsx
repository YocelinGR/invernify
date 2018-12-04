import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from "./app-routes";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppRoutes/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
