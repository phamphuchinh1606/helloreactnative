import React from 'react';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Home from './components/home/Home';
import Employees from './components/employee/Employees';
import Main from './components/main/Main';

const RootStackMenu = StackNavigator(
    {
        Main: {
            screen: Main
        },
        Home: {
            screen: Home
        },
        Employees: {
            screen: Employees
        }
    },
    {
        initialRouteName: 'Main'
    }
);

export default RootStackMenu;