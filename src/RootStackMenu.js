import React from 'react';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Home from './components/home/Home';
import Employees from './components/employee/Employees';
import Main from './components/main/Main';
import EmployeeSalary from './components/salary/EmployeeSalary';

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
        },
        EmployeeSalary:{
            screen: EmployeeSalary
        }
    },
    {
        initialRouteName: 'Main'
    }
);

export default RootStackMenu;