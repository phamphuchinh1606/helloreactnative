import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,
    Content, Item, Input} from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đăng Nhập</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{padding:20}}>
                    <Item>
                        <Icon active name='person' />
                        <Input placeholder='Icon Textbox' />
                    </Item>
                    <Item>
                    <Icon name='key' />
                        <Input placeholder='Icon Alignment in Textbox' />
                        
                    </Item>
                </Content>
            </Container>
        )
    }
}