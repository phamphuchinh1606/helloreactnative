import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var HeaderStyle = StyleSheet.create({
    header:{
        backgroundColor:'#34B089',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    back:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader:{
        color: '#fff',
        fontSize: 20
    }
});

export default HeaderStyle;