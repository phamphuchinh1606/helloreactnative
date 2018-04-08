import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import LoginStyle from '../public/css/LoginStyle';

export default class SignIn extends Component{
    render(){
        return(
            <View style={LoginStyle.containt}>
                <TextInput value={this.state.userName} placeholder = "Tài khoản" style={LoginStyle.textInput}/>
                <TextInput value={this.state.passWord} placeholder = "Mật khẩu" style={LoginStyle.textInput}/>
                <TouchableOpacity onPress={this._clickLogin} style={LoginStyle.buttonLogin}>
                    <Text style={LoginStyle.textButton}>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        )
    }
}