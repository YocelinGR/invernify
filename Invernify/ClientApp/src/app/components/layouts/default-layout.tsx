import React from 'react';
import Nav from "./nav";
import Footer from "./footer/footer";

export default class DefaultLayout extends React.Component {
    public render() {
        return (
            <div>
                <Nav/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}
