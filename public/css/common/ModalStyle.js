import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

let ModalStyle = StyleSheet.create({
    modalBody: {
        height: (height * 2) / 5,
        width: width - 40,
    },
    modalContent:{
        padding: 20
    },
    modalItem:{
        flexDirection: 'row'
    },
    modalItemLable:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalItemText:{
        flex: 2
    },
    modalFooter:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    modalButton:{
        width: width/4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 20,
        borderRadius: 15
    },
    fontWeight:{
        fontWeight: 'bold'
    },
    fontSize18:{
        fontSize: 18
    }
});

export default ModalStyle;