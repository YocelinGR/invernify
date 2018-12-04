import React from 'react';
import classes from './admin-layout-header.module.scss';

type AdminLayoutHeaderProps = {
    onToggleClick: () => void;
};

export default class AdminLayoutHeader extends React.Component<AdminLayoutHeaderProps> {
    public render() {
        const {onToggleClick} = this.props;
        return (
            <div className={classes.ctn}>
                <div className={classes.left}>
                    <a className={classes.burger} onClick={onToggleClick}>
                        <i className="fas fa-bars"/>
                    </a>
                </div>
                <div className={classes.right}>
                    <a className={classes.user}/>
                </div>
            </div>
        );
    }
}
