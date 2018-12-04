import React from 'react';
import classes from './footer-networks.module.scss';

const FooterNetworks = () => (
    <div className={classes.ctn}>
        <a><i className="fab fa-facebook-f" /></a>
        <a><i className="fab fa-instagram" /></a>
        <a><i className="fab fa-twitter" /></a>
        <a><i className="fab fa-youtube" /></a>
    </div>
);

export default FooterNetworks;