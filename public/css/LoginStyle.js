import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var LoginStyle = StyleSheet.create({
    body:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
    },
    header:{
        flex: 1.5,
        backgroundColor:'#34B089',
        flexDirection : 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textHeader:{
        color: 'white',
        fontSize: 30,
        marginLeft: 20
    },
    containt:{
        flex: 7.5,
        backgroundColor: '#EEEEEE',
        padding:20
    },
    textInput:{
        height: 50,
        backgroundColor: '#fff',
        marginBottom:20,
        borderRadius: 20,
        paddingLeft: 15,
        fontSize: 20
    },
    buttonLogin:{
        height:50,
        borderRadius: 20,
        backgroundColor: '#000099',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: '#FFF',
        fontSize: 20
    },
    footer:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        padding: 20
    },
    contentFooter: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    buttonSignIn:{
        backgroundColor: '#00AA00',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    buttonSignUp:{
        backgroundColor: '#FF9933',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    textButtonFooter: {
        fontSize: 20,
        color: '#fff'
    }
});

export default LoginStyle;