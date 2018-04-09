import React from 'react';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import HeaderTitle from './components/main/Header'
import Home from './components/home/Home';
import Employees from './components/employee/Employees';

const RootStackMenu = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Trang chủ'
            }
        },
        Employees: {
            screen: Employees,
            navigationOptions: {
                title: 'Danh sách nhân viên'
            }
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#34B089'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignItems:'center',
                justifyContent: 'center'
            },
            headerRight: (
                <Button style={{ backgroundColor: '#34B089', flex: 1  }}
                    onPress={() => navigation.navigate('DrawerOpen')}>
                    <Image source={require('../images/menu-icon.png')} style={{ width: 30, height: 30 , marginRight: 10}}/>
                </Button>
            )
        })
    }
);

export default RootStackMenu;