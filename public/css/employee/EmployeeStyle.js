import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var EmployeeStyle = StyleSheet.create({
    contentStyle:{
        padding: 10   
    },
    employeeInfo:{
        flexDirection: 'row'
    },
    lableInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInfor:{
        flex: 3
    },
    radioInfo:{
        flex: 3,
        flexDirection: 'row'
    }
});

export default EmployeeStyle;