import React from 'react';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HeaderTitle from '../components/main/MainHeader'
import Home from '../components/home/Home';
import StackRouterEmployee from '../navigators/StackRouterEmployee';
import Employees from '../components/employee/Employees';
import Main from '../components/main/Main';

const Menu = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chủ'
        }
    },
    Employees: {
        screen: Employees,
        navigationOptions: {
            title: 'Danh sách nhân viên'
        }
    },
});

const RootStackMenu = StackNavigator(
    {
        Menu: {
            screen: Menu
        },
        StackRouterEmployee:{
            screen: StackRouterEmployee
        },
        Main :{
            screen: Main
        }
    },
    {
        initialRouteName: 'Main',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#34B089'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignItems: 'center',
                justifyContent: 'center'
            },
            headerRight: (
                <Button style={{ backgroundColor: '#34B089', flex: 1 }}
                    onPress={() => navigation.navigate('DrawerOpen')}>
                    <Image source={require('../../images/menu-icon.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                </Button>
            )
        })
    }
);



export default RootStackMenu;