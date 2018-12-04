import React from 'react';
import classes from './admin-layout.module.scss';
import AdminLayoutHeader from "./admin-layout-header";
import AdminLayoutSidebar from "./admin-layout-sidebar";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
export default class AdminLayout extends React.Component {

    @observable private sidebarOpen = false;

    private onToggleSidebarClick = () => {
        this.sidebarOpen = !this.sidebarOpen;
    };

    public render() {
        return (
            <div className={classes.ctn}>
                <AdminLayoutHeader onToggleClick={this.onToggleSidebarClick}/>
                <div className={classes.wrapper}>
                    <AdminLayoutSidebar open={this.sidebarOpen}/>
                    <div className={classes.body}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
