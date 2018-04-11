import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var EmployeeSalaryDetailStyle = StyleSheet.create({
    bodyContent:{
        backgroundColor: '#FFFF',
        margin: 10
    },
    searchInfo:{
        flexDirection: 'row'
    },
    searchLable:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchText:{
        flex: 3
    },
    resultTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        paddingLeft: 20
    },
    resultItem:{
        flexDirection: 'row'
    },
    itemLeft:{
        flex: 1
    },
    itemBody:{
        flex :1
    },
    itemRight:{
        flex: 1
    }
})

export default EmployeeSalaryDetailStyle;