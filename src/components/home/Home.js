import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import HeaderTitle from '../main/Header';

export default class Home extends Component {
    // static navigationOptions = (navigation) => ({
    //     title: 'Trang chủ',
    //     headerStyle: {
    //         backgroundColor: '#34B089',
    //     },
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    //     headerRight: (
    //         <Button style={{backgroundColor: '#34B089'}}>
    //             <Image source={require('../../../images/menu-icon.png')} />
    //         </Button>
    //     )
    // });
    // static navigationOptions = ({ navigation }) => {
    //     const params = navigation.state.params || {};

    //     return {
    //         headerTitle: <HeaderTitle navigation={navigation}/>
    //     };
    // }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Button light onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Text> Nhan vien </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}