import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import SignIn from './SignIn';
import LoginStyle from '../public/css/LoginStyle';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            passWord : '',
            isSignIn: true
        }
    }

    _onChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        });
    }

    _clickLogin(){

    }

    _clickSignIn(){
        this.setState({isSignIn: true});
    }

    _clickSignUp(){
        this.setState({isSignIn: false});
    }

    render(){
        const signInJsx = (
            <View style={LoginStyle.containt}>
                <TextInput value={this.state.userName}  style={LoginStyle.textInput} 
                            onChange={(userName)=>{this.setState({userName})}}/>
                <TextInput value={this.state.passWord} placeholder = "Mật khẩu" style={LoginStyle.textInput}/>
                <TouchableOpacity onPress={this._clickLogin} style={LoginStyle.buttonLogin}>
                    <Text style={LoginStyle.textButton}>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJsx = (
            <View style={LoginStyle.containt}>
                <TextInput value={this.state.userName} placeholder = "Họ và tên" style={LoginStyle.textInput}/>
                <TextInput value={this.state.passWord} placeholder = "Tài khoản" style={LoginStyle.textInput}/>
                <TextInput value={this.state.userName} placeholder = "Mật khẩu" style={LoginStyle.textInput}/>
                <TextInput value={this.state.passWord} placeholder = "Nhập lại mật khẩu" style={LoginStyle.textInput}/>
                <TouchableOpacity onPress={this._clickLogin} style={LoginStyle.buttonLogin}>
                    <Text style={LoginStyle.textButton}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        );
        const loginContent = this.state.isSignIn ? signInJsx : signUpJsx;

        return(
            <View style={LoginStyle.body}>
                <View style={LoginStyle.header}>
                    <Image source={require('../images/login-icon.png')}/>
                    <Text style={LoginStyle.textHeader}>Đăng Nhập</Text>
                </View>
                {loginContent}
                <View style={LoginStyle.footer}>
                    <View style={LoginStyle.contentFooter}>
                        <TouchableOpacity style={LoginStyle.buttonSignIn} onPress={this._clickSignIn.bind(this)}>
                            <Text style={LoginStyle.textButtonFooter}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={LoginStyle.buttonSignUp} onPress={this._clickSignUp.bind(this)}>
                            <Text style={LoginStyle.textButtonFooter}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}