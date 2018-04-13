import React from 'react';
import {StyleSheet} from 'react-native';

var InputOrderStyle = StyleSheet.create({
    headerContent:{
        flexDirection: 'row',
        padding:20,
        backgroundColor: '#EEEEEE'
    },
    contentItemLable:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentItemText:{
        flex: 3
    },
    contentlableTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    totalItem:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    totalLabel:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    totalText:{
        flex:1
    }
});

export default InputOrderStyle;