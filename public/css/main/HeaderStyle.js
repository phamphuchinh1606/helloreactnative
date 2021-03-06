import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var HeaderStyle = StyleSheet.create({
    headerContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHeader:{
        color: '#fff',
        fontSize: 20
    },
    leftImageIcon:{
        width: 40,
        height: 40
    },
});

export default HeaderStyle;