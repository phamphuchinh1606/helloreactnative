import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './components/home/Home';
import Employees from './components/employee/Employees';
import Menu from './components/main/Menu';

const RootStack = StackNavigator(
    {
        ScreenMenu: {
            screen: Menu,
            navigationOptions:{
                title: 'Me nu'
            }
        },
        ScreenHome: {
            screen: Home,
            navigationOptions:{
                title: 'Trang chủ'
            }
        },
        ScreenEmployees: {
            screen: Employees,
            navigationOptions:{
                title: 'Danh sách nhân viên'
            }
        }

    },
    {
        initialRouteName: 'ScreenHome',
    }
);

export default RootStack;