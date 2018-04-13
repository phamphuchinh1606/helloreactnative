import React from 'react';
import {StyleSheet} from 'react-native';

var ListOrderStyle = StyleSheet.create({
    searchInfo:{
        flexDirection: 'row'
    },
    searchLabel:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    searchText:{
        flex: 3,
        paddingRight:10,
        justifyContent: 'center'
    },
    resultTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        paddingLeft: 20
    }
});

export default ListOrderStyle;