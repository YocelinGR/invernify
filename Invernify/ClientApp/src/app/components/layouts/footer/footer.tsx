import React from "react";
import classes from './footer.module.scss';
import * as faker from "faker";
import FooterSection from "./footer-section";
import FooterBottom from "./footer-bottom";
import FooterNetworks from "./footer-networks";

const Footer = () => (
    <footer className={classes.ctn}>
        <FooterSection>
            <i className={`fas fa-cloud ${classes.logo}`} />
        </FooterSection>

        <FooterSection title="Follow us">
            <FooterNetworks />
        </FooterSection>

        <FooterSection title="About us">
            <p>{faker.lorem.paragraphs(1)}</p>
        </FooterSection>

        <FooterBottom />
    </footer>
);

export default Footer;