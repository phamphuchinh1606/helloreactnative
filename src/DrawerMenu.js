import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import RootStackMenu from './RootStackMenu';
import Menu from './components/main/Menu';

const { height, width } = Dimensions.get('window');

const DrawerMenu = DrawerNavigator(
    {
        Main: {
            screen: RootStackMenu
        }
    },
    {
        initialRouteName: 'Main',
        drawerWidth: width * 2 / 3,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />,
        contentOptions: {
            activeTintColor: '#000',
        },
    }
);

export default DrawerMenu;