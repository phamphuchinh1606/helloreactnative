import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var ListTimeKeepingStyle = StyleSheet.create({
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
    }
})

export default ListTimeKeepingStyle;