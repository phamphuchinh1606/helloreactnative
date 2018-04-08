import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Body from './Body';

export default class Main extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                openDrawerOffset={0.3} // 30% gap on the right side of drawer
                content={<Menu />}
            >
                <Body openControlPanel={this.openControlPanel.bind(this)}/>
            </Drawer>
        )
    }
}