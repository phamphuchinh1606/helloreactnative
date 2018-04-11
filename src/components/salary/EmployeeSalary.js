import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Container, Header, Content, Footer, Body, Text } from 'native-base';

import EmployeeSalaryStyle from '../../../public/css/salary/EmployeeSalaryStyle';
import MainHeader from '../main/MainHeader';

export default class EmployeeSalary extends Component {
    constructor(props){
        super(props);
        this.state = {
            weekValue : "1"
        }
    }

    render() {
        var { bodyContent, searchInfo, searchLable, searchText } = EmployeeSalaryStyle;
        var { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: '#EEE9E9' }}>
                <MainHeader navigation={navigation} title="Lương nhân viên" showMenu={true} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Tuần : </Text>
                        </View>
                        <View style={searchText}>
                            <Picker
                                selectedValue={this.state.weekValue}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ weekValue: itemValue })}>
                                <Picker.Item label="Tuần 1" value="1" />
                                <Picker.Item label="Tuần 2" value="2" />
                                <Picker.Item label="Tuần 3" value="3" />
                                <Picker.Item label="Tuần 4" value="4" />
                            </Picker>
                        </View>
                    </View>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Thời gian : </Text>
                        </View>
                        <View style={searchText}>
                            <Text> Từ 14/02/2018 đến 13/03/2018 </Text>
                        </View>
                    </View>
                </Content>
                <Footer>

                </Footer>
            </Container>
        )
    }
}