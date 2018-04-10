import React, { Component } from 'react';
import {Container, Text } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';

import Header from './MainHeader';
import Footer from './MainFooter';
import Body from './MainBody';

import Home from '../home/Home';

export default class Main extends Component {
    render() {
        var {navigation} = this.props;
        return (
            <Container>
                <Header navigation={navigation} title="Trang chủ" showMenu={true}/>
                <Home/>
                <Footer />
            </Container>
        )
    }
}