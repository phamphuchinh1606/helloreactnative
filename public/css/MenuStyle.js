import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var MenuStyle = StyleSheet.create({
    bodyMenu:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
    },
    userInfor:{
        flex: 2,
        backgroundColor: '#CCFFFF',
        alignItems: 'center',
        paddingTop: 5
    },
    userInforText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    cotentMenu:{
        flex: 7,
        backgroundColor: '#EEEEEE'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    textItem: {
        fontSize: 18,
        marginLeft: 15
    },
    footer:{
        flex: 1,
        backgroundColor: '#FFE4C4'
    },
    footerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFooter: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default MenuStyle;