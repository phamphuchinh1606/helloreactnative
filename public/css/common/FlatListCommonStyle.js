import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

let FlatListCommonStyle = StyleSheet.create({
    resultItem:{
        flexDirection: 'row'
    },
    itemLeft:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    itemBody:{
        flex :1
    },
    itemRight:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    resultTotal:{
        flexDirection: 'row',
        backgroundColor: '#FDF5E6'
    },
    totalLeft: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    totalBody:{
        flex :1
    },
    totalRight:{
        flex :1
    }
});

export default FlatListCommonStyle;