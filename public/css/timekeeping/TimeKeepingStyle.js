import Ract from 'react';
import { StyleSheet } from 'react-native';

const TimeKeepingStyle = StyleSheet.create({
    bodyContent: {
        backgroundColor: '#FFFF',
        margin: 10,
        flex: 1
    },
    HeaderItem:{
        flexDirection: 'row',
        padding:20,
        backgroundColor: '#EEEEEE'
    },
    itemLable:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText:{
        flex: 3
    },
    lableTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    listTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    listAddImage:{
        width: 40,
        height: 40
    },
    textTitleList:{
        fontSize: 20,
        fontWeight: 'bold' 
    },
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
        flex: 1
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

export default TimeKeepingStyle;