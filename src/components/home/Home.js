import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button light onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Text> Nhan vien111 </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}