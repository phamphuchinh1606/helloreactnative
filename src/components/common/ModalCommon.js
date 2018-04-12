import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Footer, Text, Button } from 'native-base';

export default class ModalCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            isDisabled: false,
        };
    }

    render() {
        var BContent = <Button onPress={() => this.setState({ isOpen: false })} style={[styles.btn, styles.btnModal]}><Text>X</Text></Button>;
        return (
            <Modal style={[styles.modal, styles.modal4]} isOpen={this.state.isOpen} onClosed={() => this.setState({ isOpen: false })} position={"center"} backdropContent={BContent}>
                <Container>
                    <Header><Text>Header</Text></Header>
                    <Content style={{height: 300}}>
                        <Text >Modal centered</Text>
                        <Button onPress={() => this.setState({ isDisabled: !this.state.isDisabled })}>
                            <Text>Button</Text>
                        </Button>
                    </Content>
                    <Footer><Text>Footer</Text></Footer>
                </Container>
            </Modal>


        )
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal4: {
        height: 500,
        width: 400
    },
})
