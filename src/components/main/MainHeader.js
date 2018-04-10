import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Header, Left, Body, Right, Title, Icon, Button } from 'native-base';

import HeaderStyle from '../../../public/css/main/HeaderStyle';
// Image
import backIconImage from '../../../images/back-icon.png';
import menuIcon from '../../../images/menu-icon.png';

export default class MainHeader extends Component {
    render() {
        var { back, textHeader } = HeaderStyle;
        var {openDrawer} = this.props;
        return (
            <Header>
                <Left style={back}>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Danh sách nhân viên</Title>
                </Body>
                <Right>
                    <Button transparent onPress={()=>openDrawer()} >
                        <Icon name="menu" />
                    </Button>
                </Right>

            </Header>

            // <View style={header}>
            //     <TouchableOpacity style={back} onPress={()=>navigation.goBack()}>
            //         <Image source={backIconImage} />
            //         <Text style={textHeader}>Back</Text>
            //     </TouchableOpacity>
            //     <Text style={textHeader}>Danh sách nhân viên</Text>
            //     <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')}>
            //         <Image source={require('../../../images/menu-icon.png')} />
            //     </TouchableOpacity>
            // </View>
        )
    }
}