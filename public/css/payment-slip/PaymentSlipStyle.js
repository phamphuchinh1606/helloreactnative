import React from 'react';
import {StyleSheet} from 'react-native';

var PaymentSlipStyle = StyleSheet.create({
    headerContent:{
        flexDirection: 'row',
        padding:20,
        backgroundColor: '#EEEEEE'
    },
    contentItemLable:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentItemText:{
        flex: 2
    },
    contentlableTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    listTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    textTitleList:{
        fontSize: 20,
        fontWeight: 'bold' 
    }
});

export default PaymentSlipStyle;