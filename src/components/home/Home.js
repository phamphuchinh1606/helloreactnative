import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Trang chủ</Text>
                <TouchableOpacity onPress={()=>navigate('ScreenEmployees')}>
                    <Text>vao nhan vien</Text>
                </TouchableOpacity>
            </View>
        )
    }
}