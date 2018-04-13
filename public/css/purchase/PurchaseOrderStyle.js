import React from 'react';
import {StyleSheet} from 'react-native';

var PurchaseOrderStyle = StyleSheet.create({
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
    listTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    textTitleList:{
        fontSize: 20,
        fontWeight: 'bold' 
    }
});

export default PurchaseOrderStyle;