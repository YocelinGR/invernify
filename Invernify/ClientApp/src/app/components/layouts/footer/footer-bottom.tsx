import React from 'react';
import classes from './footer-bottom.module.scss';

const FooterBottom = () => (
    <section className={classes.ctn}>
        <ul className={classes.links}>
            <li><a href="#">About</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className={classes.copyright}>© Copyright - Invernify</div>
    </section>
);

export default FooterBottom;