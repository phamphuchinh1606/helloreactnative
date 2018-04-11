import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Main from './components/main/Main';
import Employees from './components/employee/Employees';
import Employee from './components/employee/Employee';
import Menu from './menu/Menu';
import EmployeeSalary from './components/salary/EmployeeSalary';

const { height, width } = Dimensions.get('window');

const DrawerMenu = DrawerNavigator(
    {
        Main: {
            screen: Main
        },
        Employees:{
            screen: Employees
        },
        Employee:{
            screen: Employee
        },
        EmployeeSalary:{
            screen: EmployeeSalary
        }
    },
    {
        initialRouteName: 'EmployeeSalary',
        drawerWidth: width * 2 / 3,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />,
        contentOptions: {
            activeTintColor: '#000',
        },
    }
);

export default DrawerMenu;