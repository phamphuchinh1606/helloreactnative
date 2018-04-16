import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var HeaderStyle = StyleSheet.create({
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
    leftImageIcon:{
        width: 20,
        height: 20
    },
    textHeader:{
        color: '#fff',
        fontSize: 20
    },
    containt:{
        flex:8
    },
    titleHeader:{
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeaderText:{
        height: height/17,
        width: width-(width/10),
        backgroundColor: '#fff',
        borderRadius : 10,
        paddingLeft: 10,
        fontSize: 15
    }
});

export default HeaderStyle;