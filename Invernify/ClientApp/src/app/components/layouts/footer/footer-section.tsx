import React from 'react';
import classes from './footer-section.module.scss';

type FooterSectionProps = {
    title?: string;
    children?: React.ReactNode;
};

const FooterSection = ({ children, title }: FooterSectionProps) => (
    <section className={classes.ctn}>
        {title ? <div className={classes.title}>{title}</div> : null}
        {children ? <div className={classes.body}>{children}</div> : null}
    </section>
);

export default FooterSection;