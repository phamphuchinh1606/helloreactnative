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
    itemLeft1:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    itemBody:{
        flex :1
    },
    itemBodyNumber:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    },
    itemBodyText:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    itemRight:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
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
    totalBodyNumber:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    },
    totalBodyText:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    totalRight:{
        flex :1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    }
});

export default FlatListCommonStyle;