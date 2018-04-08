import React, { Component } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import Header from './Header';
import RootStack from '../../RootStack';

export default class Body extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header openControlPanel={this.props.openControlPanel} />
                <View style={{ flex: 9 }}>
                    <RootStack/>
                    

                </View>
            </View>
        )
    }
}