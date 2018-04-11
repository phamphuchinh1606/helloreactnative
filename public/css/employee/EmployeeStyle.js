import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var EmployeeStyle = StyleSheet.create({
    contentStyle:{
        padding: 10,
        paddingBottom: 50   
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
    },
    salyInfo:{

    },
    headerSaly:{
        backgroundColor: '#0033CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextSaly:{
        color: '#ffff',
        fontSize: 18
    },
    contentSaly:{
        borderWidth: 1,
        padding: 10
    },
    itemSaly:{
        flexDirection: 'row'
    },
    itemLableSaly:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemTextSaly:{
        flex: 3
    },
    headerWorkDay:{
        backgroundColor: '#0033CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentWorkDay:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        flexWrap: 'wrap'
    },
    itemWorkDay:{
        paddingTop: 20,
        flexDirection: 'row',
        width: width/5
    },
    itemWorkDayLast:{
        paddingTop: 20,
        flexDirection: 'row',
        width: width/4
    }
});

export default EmployeeStyle;