import React from 'react';
import {StyleSheet} from 'react-native';

var ProductDetailStyle = StyleSheet.create({
    bodyContent:{
        backgroundColor: '#FFFF',
        margin: 10
    },
    infor:{
        flexDirection: 'row'
    },
    lableInfor:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textInfor:{
        flex : 2
    }
});

export default ProductDetailStyle;