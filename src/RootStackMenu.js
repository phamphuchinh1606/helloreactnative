import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HeaderTitle from './components/main/Header'
import Home from './components/home/Home';
import Employees from './components/employee/Employees';

const RootStackMenu = StackNavigator(
    {
        Home: {
            screen: Home
        },
        Employees: {
            screen: Employees
        }

    },
    {
        initialRouteName: 'Home',
        navigationOptions : ({ navigation, header,state, headerTitle }) => {
            return {
                header: <HeaderTitle navigation={navigation} header={headerTitle} state ={state}/>
            };
        }
    }
);

export default RootStackMenu;