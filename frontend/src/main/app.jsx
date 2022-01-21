import '../common/templade/dependencies'
import React from "react";

import SideBar from '../common/templade/sideBar';
import Header from '../common/templade/header';
import Footer from '../common/templade/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)