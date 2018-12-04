import React from 'react';
import Helmet from "react-helmet";

export default class HomePage extends React.Component {
    public render() {
        return (
            <div>
                <Helmet>
                    <title>Invernify</title>
                </Helmet>
                <h1>The home page</h1>
                <p>This is the home page</p>
            </div>
        );
    }
}
