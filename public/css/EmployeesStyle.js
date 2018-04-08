import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const {height,width} = Dimensions.get('window');

var EmployeesStyle = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    header:{
        flex: 1,
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
    },
    containt:{
        flex:8
    },
    employeesHeader:{
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    employeesHeaderText:{
        height: height/17,
        width: width-(width/10),
        backgroundColor: '#fff',
        borderRadius : 10,
        paddingLeft: 10,
        fontSize: 15
    },
    employeesContent:{
        flex: 9,
        backgroundColor: '#EEEEEE'
    },
    rowData:{
        flexDirection: 'row',
        flex : 1,
        backgroundColor: '#fff',
        alignItems : 'center',
        borderBottomWidth: 2,
        borderColor: '#CCCCCC',
        paddingLeft: 5,
        paddingRight: 5
    },
    imageContent:{
        width: 60,
        height: 60,
        marginLeft: 5
    },
    inforContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems : 'center',
        paddingLeft: 15,
        paddingRight: 5
    },
    inforNameContent:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default EmployeesStyle;