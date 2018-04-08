import React, {Component} from 'react';
import {View} from 'react-native';
import HeaderStyle from '../public/css/HeaderStyle';

export default class Header extends Component{
    render(){
        var {header,back,textHeader} = HeaderStyle;
        return(
            <View style={header}>
                <TouchableOpacity style={back}>
                    <Image source={require('../images/back-icon.png')} />
                    <Text style={textHeader}>Back</Text>
                </TouchableOpacity>
                <Text style={textHeader}>Danh sách nhân viên</Text>
                <TouchableOpacity>
                    <Image source={require('../images/menu-icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}