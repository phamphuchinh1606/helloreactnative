import React, { Component } from 'react';
import {Container, Text } from 'native-base';

import Header from '../main/MainHeader';
import _ContentEmployees from './_ContentEmployees';

import * as ImageCommon from '../../common/ImagesCommon';

export default class Employees extends Component {

    render() {
        var {navigation} = this.props;
        return (
            <Container>
                <Header navigation={navigation} title="Danh sách nhân viên" showMenu={true} iconLeft={ImageCommon.EmployeeIcon} />
                <_ContentEmployees navigation={navigation}/>
            </Container>
        )
    }
}