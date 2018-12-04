import React from 'react';
import classes from './admin-layout-sidebar.module.scss';
import AdminSidebarEntry from "./admin-sidebar-entry";

type AdminLayoutSidebarProps = {
    open: boolean;
}

export default class AdminLayoutSidebar extends React.Component<AdminLayoutSidebarProps> {
    public render() {
        const {open} = this.props;
        return (
            <div className={`${classes.ctn} ${open ? classes.open : ''}`}>
                <AdminSidebarEntry title="Posts" icon={'fas fa-thumbtack'}/>
                <AdminSidebarEntry title="Media" icon={'fas fa-images'}/>
                <AdminSidebarEntry title="Pages" icon={'fas fa-file'}/>
                <AdminSidebarEntry title="Comments" icon={'fas fa-comments'}/>
                <AdminSidebarEntry title="Settings" icon={'fas fa-wrench'}/>
            </div>
        );
    }
}
