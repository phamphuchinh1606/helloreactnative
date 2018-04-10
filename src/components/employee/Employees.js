import React, { Component } from 'react';
import {Container, Text } from 'native-base';

import Header from '../main/MainHeader';
import _ContentEmployees from './_ContentEmployees';

export default class Employees extends Component {

    render() {
        var {navigation} = this.props;
        return (
            <Container>
                <Header navigation={navigation} title="Danh sách nhân viên" showMenu={true}/>
                <_ContentEmployees navigation={navigation}/>
            </Container>
        )
    }
}