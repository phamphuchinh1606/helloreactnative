import React, { Component } from 'react';
import { ListView, View, TextInput } from 'react-native';
import { Container, Header, Content, Footer, Body, Button, Text, Icon, Item, Label, Input ,
    ListItem,Left, Radio} from 'native-base';

import EmployeeStyle from '../../../public/css/employee/EmployeeStyle';
import MainHeader from '../main/MainHeader';

export default class Employee extends Component {
    render() {
        let { contentStyle, employeeInfo, lableInfo, textInfor,radioInfo } = EmployeeStyle;
        return (
            <Container>
                <MainHeader navigation={this.props.navigation} title="Thông tin nhân viên" showBack={true} backName="Employees" />
                <Content style={contentStyle}>
                    <View style={employeeInfo}>
                        <View style={lableInfo}>
                            <Text>Họ và tên : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={employeeInfo}>
                        <View style={lableInfo}>
                            <Text>Điện thoại : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={employeeInfo}>
                        <View style={lableInfo}>
                            <Text>Email : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={employeeInfo}>
                        <View style={lableInfo}>
                            <Text>Giới tính : </Text>
                        </View>
                        <View style={radioInfo}>
                            <ListItem>
                                <Radio selected={false} />
                                <Text> Nam</Text>
                            </ListItem>
                            <ListItem>
                                <Radio selected={true} />
                                <Text> Nữ</Text>
                            </ListItem>
                        </View>
                    </View>
                    <View style={{margin:10}}>
                        <Header>
                            <Text>Thông tin lương</Text>
                        </Header>
                        <Content style={{borderWidth:1,flex:1}}>
                            <Text>sdfsfd</Text>
                        </Content>
                    </View>
                </Content>
            </Container>
        )
    }
}