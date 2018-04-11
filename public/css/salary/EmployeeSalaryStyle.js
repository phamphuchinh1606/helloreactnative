import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var EmployeeSalaryStyle = StyleSheet.create({
    bodyContent:{
        backgroundColor: '#FFFF',
        margin: 10
    },
    searchInfo:{
        flexDirection: 'row',
        padding: 10
    },
    searchLable:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchText:{
        flex: 3
    }
})

export default EmployeeSalaryStyle;