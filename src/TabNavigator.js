import React from 'react';
import {Text} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Header from './components/main/Header';
import Home from './components/home/Home';
import HomeWeek from './components/home/HomeWeek';
import HomeMonth from './components/home/HomeMonth';
import Employees from './components/employee/Employees';

export const demoStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
                title: 'Ngày'
            }
        },
        HomeWeek: {
            screen: HomeWeek,
            navigationOptions:{
                title: 'Tuần'
            }
        },
        HomeMonth: {
            screen: HomeMonth,
            navigationOptions:{
                title: 'Tháng'
            }
        },
        StackEmployees: {
            screen: Employees
        }
    },
    {
        initialRouteName: 'HomeWeek',
        headerRight: <Text>Header</Text>,
        /* The header config from HomeScreen is now here */
        // navigationOptions: {
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // },
      }
);

export default TabNavigator(
    {
        TabHomeDay: {
            screen: demoStack,
            navigationOptions: {
                label: 'Ngày'
            }
        },
        TabHomeWeek: {
            screen: HomeWeek,
            navigationOptions: {
                label: 'Tuần'
            }
        },
        TabHomeMonth: {
            screen: HomeMonth,
            navigationOptions: {
                label: 'Tháng'
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);