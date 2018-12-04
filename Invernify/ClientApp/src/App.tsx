import React from 'react';

// Import .js files
import welcomeMessage from 'welcomeMessage';
// Import .jsx files
import Welcome from 'Welcome';

// Import SVG as React Component
import LogoSvg from './logo.svg';

// Choose your style import strategy
// Import css
import 'App.css';
// Import css modules
import fromCssModule from 'App.module.css';
// Import sass
import 'App.scss';
// Import sass modules
import fromSassModule from 'App.module.scss';
import {IWeapon} from "./inversify/examples/example-interfaces";
import {lazyInject} from "./inversify/inversify.config";
import ExampleTypes from "./inversify/examples/example-types";
import {observable} from 'mobx';
import {observer} from "mobx-react";

@observer
class App extends React.Component {

    @lazyInject(ExampleTypes.Weapon) private readonly weapon!: IWeapon;

    @observable private number = 0;

    private onClick = () => {
        ++this.number;
    };

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LogoSvg className="App-logo"/>
                    <h1 className="App-title">
                        <Welcome>{welcomeMessage()}</Welcome>
                    </h1>
                    <p>Depencency injection: "{this.weapon.hit()}"</p>
                    <div>
                        <p className="sass-success">Style from Sass</p>
                        <p className={fromCssModule.success}>Style from Css Modules</p>
                        <p className={fromSassModule.success}>Style from Sass Modules</p>
                        <button onClick={this.onClick}>Click {this.number}</button>
                    </div>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
