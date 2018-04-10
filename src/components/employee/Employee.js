import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header,Content, Footer, Body, Button, Text, Icon } from 'native-base';

export default class Employee extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button iconRight>
                        <Icon name='home' />
                        <Text>Home</Text>
                    </Button>
                </Header>
                <Content>
                    <Text>Nhan vien</Text>
                </Content>
            </Container>
        )
    }
}