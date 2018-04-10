import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class MainFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={Actions.Home}>
                        <Icon name="apps" />
                    </Button>
                    <Button onPress={Actions.Employees}>
                        <Icon name="camera" />
                    </Button>
                    <Button active>
                        <Icon active name="navigate" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}