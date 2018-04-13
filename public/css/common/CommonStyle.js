import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

let CommonStyle = StyleSheet.create({
    bodyContent:{
        backgroundColor: '#FFFF',
        margin: 10
    },
    //Font
    fontWeight:{
        fontWeight: 'bold'
    },
    fontSize18:{
        fontSize: 18
    },
    fontSize20:{
        fontSize: 20
    },
    //FontColor
    colorBlue:{
        color: 'blue'
    },

    ImageWH40:{
        width: 40,
        height: 40
    },
    // Padding
    //Left
    paddingLeft10:{
        paddingLeft: 10
    },
    paddingLeft20:{
        paddingLeft: 20
    },
    //Top
    paddingTop10:{
        paddingTop: 10
    },
    paddingTop20:{
        paddingTop: 20
    },
    //Right
    paddingRight10:{
        paddingRight: 10
    },
    paddingRight20:{
        paddingRight: 20
    },

    // Margin
    marginTop20:{
        marginTop: 20
    },
    marginTop10:{
        marginTop: 10
    },
    marginLeft10:{
        marginLeft: 10
    },
    marginLeft20:{
        marginLeft: 20
    },
    marginBottom20:{
        marginBottom: 20
    },
    marginBottom10:{
        marginBottom: 10
    },

    // Flex
    flexDirecRowBetween:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //Header item
    headerItem:{
        backgroundColor: '#0033CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerItemText:{
        color: '#ffff',
        fontSize: 18
    },
    contentItem:{
        borderWidth: 1,
        padding: 10
    },
    itemDetail:{
        flexDirection: 'row'
    },
    itemDetailLable:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    itemDetailText:{
        flex: 3
    },
});

export default CommonStyle;