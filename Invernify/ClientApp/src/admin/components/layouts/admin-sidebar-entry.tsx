import React from 'react';
import classes from './admin-sidebar-entry.module.scss';

type AdminSidebarEntryProps = {
    title: string;
    icon: string;
}

export default class AdminSidebarEntry extends React.Component<AdminSidebarEntryProps> {
    public render() {
        const {title, icon} = this.props;
        return (
            <a className={classes.ctn}>
                <i className={`${icon} ${classes.icon}`}/>
                <span className={classes.title}>{title}</span>
            </a>
        );
    }
}
