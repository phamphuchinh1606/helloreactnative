import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var MenuStyle = StyleSheet.create({
    bodyMenu:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
    },
    headerMenu:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    cotentMenu:{
        flex: 7,
        backgroundColor: '#EEEEEE'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5, 
        marginBottom: 5
    },
    textItem: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageIcon:{
        width: 40,
        height: 40
    },
    footer:{
        backgroundColor: '#FFE4C4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: height/100
    },
    footerItem: {
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