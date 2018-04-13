import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions, FlatList } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Main from './components/main/Main';
import Employees from './components/employee/Employees';
import Employee from './components/employee/Employee';
import Menu from './menu/Menu';
import EmployeeSalary from './components/salary/EmployeeSalary';
import EmployeeSalaryDetail from './components/salary/EmployeeSalaryDetail';
import ListTimeKeeping from './components/timekeeping/ListTimeKeeping';
import TimeKeeping from './components/timekeeping/TimeKeeping';
import ListProduct from './components/product/ListProduct';
import ProductDetail from './components/product/ProductDetail';
import InputOrder from './components/order/InputOrder';
import ListOrder from './components/order/ListOrder';
import ListPurchaseOrder from './components/purchase/ListPurchaseOrder';
import PurchaseOrder from './components/purchase/PurchaseOrder';

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
        },
        EmployeeSalaryDetail:{
            screen: EmployeeSalaryDetail
        },
        ListTimeKeeping: {
            screen: ListTimeKeeping
        },
        TimeKeeping:{
            screen: TimeKeeping
        },
        ListProduct:{
            screen: ListProduct
        },
        ProductDetail:{
            screen: ProductDetail
        },
        InputOrder:{
            screen: InputOrder
        },
        ListOrder:{
            screen: ListOrder
        },
        ListPurchaseOrder:{
            screen: ListPurchaseOrder
        },
        PurchaseOrder: {
            screen:PurchaseOrder
        }
    },
    {
        initialRouteName: 'PurchaseOrder',
        drawerWidth: width * 2 / 3,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />,
        contentOptions: {
            activeTintColor: '#000',
        },
    }
);

export default DrawerMenu;