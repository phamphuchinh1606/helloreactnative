import React, { Component } from 'react';
import {StyleProvider, Container, Text } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';

import Header from './MainHeader';
import Footer from './MainFooter';
import Body from './MainBody';

import Home from '../home/Home';
import Employees from '../employee/Employees';

//Image
import backIcon from '../../../images/back-icon.png';
import menuIcon from '../../../images/menu-icon.png';

export default class Main extends Component {
    render() {
        var {openDrawer} = this.props;
        return (
            <Container>
                <Header openDrawer={openDrawer}/>
                <Router>
                    <Scene key="root">
                        <Scene key="Home" component={Home} title="Trang chủ" />
                        <Scene key="Employees" component={Employees} title="Danh sách nhân viên" />
                    </Scene>
                </Router>
                
                <Footer />
            </Container>
        )
    }
}