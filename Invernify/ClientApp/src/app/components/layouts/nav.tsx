import React from "react";
import classes from './nav.module.scss';

const Nav = () => (
    <nav className={classes.ctn}>
        <a className={classes.burger}>
            <i className="fas fa-bars"/>
        </a>
        <a className={classes.logo}>
            <i className="fas fa-cloud"/>
        </a>
        <a className={classes.search}>
            <i className="fas fa-search"/>
        </a>
    </nav>
);

export default Nav;