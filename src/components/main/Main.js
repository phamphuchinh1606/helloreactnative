import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import Drawer from 'react-native-drawer';
import MainStyle from '../../../public/css/main/MainStyle';
import Header from './Header';
import Home from '../home/Home';
import Employees from '../employee/Employees';

//Image
import backIcon from '../../../images/back-icon.png';
import menuIcon from '../../../images/menu-icon.png';

export default class Main extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    }
    render() {
        var { body, header, back, textHeader, containt } = MainStyle;
        return (
            <View style={body}>
                <Header />
                <View style={containt}>
                    <Text>Trang chủ</Text>
                </View>
            </View>
        )
    }
}