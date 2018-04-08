import React, {Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import HeaderStyle from '../../../public/css/HeaderStyle';

// Image
import backIconImage from '../../../images/back-icon.png';

export default class Header extends Component{
    render(){
        var {header,back,textHeader} = HeaderStyle;
        return(
            <View style={header}>
                <TouchableOpacity style={back}>
                    <Image source={backIconImage} />
                    <Text style={textHeader}>Back</Text>
                </TouchableOpacity>
                <Text style={textHeader}>Danh sách nhân viên</Text>
                <TouchableOpacity onPress={this.props.openControlPanel}>
                    <Image source={require('../../../images/menu-icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}