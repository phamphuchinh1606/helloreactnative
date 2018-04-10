import React, { Component } from 'react';
import { Image, Text , View} from 'react-native';
import { Header, Left, Body, Right, Title, Icon, Button } from 'native-base';

import HeaderStyle from '../../../public/css/main/HeaderStyle';

export default class MainHeader extends Component {

    getBackJsx(showBack) {
        if (!showBack) {
            return (
                <View/>
            );
        }
        return (
            <Button transparent onPress={() =>this.props.navigation.navigate(this.props.backName)}>
                <Icon name="arrow-back" />
            </Button>
        );
    }

    getMenuJsx(showMenu) {
        console.log(showMenu);
        if (!showMenu) {
            return (
                <View/>
            );
        }
        return (
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')} >
                <Icon name="menu" />
            </Button>
        );
    }

    render() {
        let { headerContent, textHeader } = HeaderStyle;
        let { navigation } = this.props;
        let { showMenu } = this.props;
        let { showBack } = this.props;
        
        return (
            <Header style={headerContent}>
                {this.getBackJsx(showBack)}
                <Title>{this.props.title}</Title>
                {this.getMenuJsx(showMenu)}
            </Header>
        )
    }
}