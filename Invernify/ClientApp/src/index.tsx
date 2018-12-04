import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from "./app/app-routes";
import './index.css';

ReactDOM.render(<AppRoutes/>, document.getElementById('root'));

registerServiceWorker();
