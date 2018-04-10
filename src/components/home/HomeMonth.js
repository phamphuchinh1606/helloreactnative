import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class HomeMonth extends Component {
    // static navigationOptions = {
    //     headerTitle: <HeaderTitle/>
    //   };
    render() {
        return (
            <Container>
                <Header />
                <Content>
                <Button light onPress={()=>this.props.navigation.navigate('StackEmployees')}>
                    <Text> Nhan vien </Text>
                </Button>
                </Content>
            </Container>
        );
    }
}