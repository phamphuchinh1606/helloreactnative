import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import HeaderTitle from '../main/Header';

export default class Home extends Component {
    // static navigationOptions =  {
    //     headerTitle: <HeaderTitle />
    //   };
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
                    <Button light onPress={() => this.props.navigation.navigate('StackEmployees')}>
                        <Text> Nhan vien </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}