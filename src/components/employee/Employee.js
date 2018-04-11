import React, { Component } from 'react';
import { ListView, View, TextInput } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Button, Text, Icon, Item, Label, Input, Title,
    ListItem, Left, Radio, Right, CheckBox
} from 'native-base';

import EmployeeStyle from '../../../public/css/employee/EmployeeStyle';
import MainHeader from '../main/MainHeader';

const listDay = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

export default class Employee extends Component {
    render() {
        let { contentStyle, employeeInfo, lableInfo, textInfor, radioInfo, contentSaly,
            headerSaly, headerTextSaly, itemSaly, itemLableSaly, itemTextSaly,
            headerWorkDay, contentWorkDay, itemWorkDay, itemWorkDayLast } = EmployeeStyle;
        var { navigation } = this.props;
        return (
            <Container>
                <Header style={{ backgroundColor: '#CFCFCF' }}>
                    <Left>
                        <Button transparent onPress={() => navigation.navigate("Employees")}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Thông tin nhân viên</Title>
                    </Body>
                    <Right>
                        <Button iconLeft>
                            <Text>Lưu lại</Text>
                        </Button>
                    </Right>
                </Header>
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
                    <View style={{ margin: 10, height: 180 }}>
                        <Container>
                            <Header style={headerSaly}>
                                <Text style={headerTextSaly}>Thông tin lương</Text>
                            </Header>
                            <Content style={contentSaly}>
                                <View style={itemSaly}>
                                    <View style={itemLableSaly}>
                                        <Text>3 giờ đầu : </Text>
                                    </View>
                                    <View style={itemTextSaly}>
                                        <TextInput />
                                    </View>
                                </View>
                                <View style={itemSaly}>
                                    <View style={itemLableSaly}>
                                        <Text>2 giờ sau : </Text>
                                    </View>
                                    <View style={itemTextSaly}>
                                        <TextInput />
                                    </View>
                                </View>
                            </Content>
                        </Container>
                    </View>
                    <View style={{ margin: 10, height: 180 }}>
                        <Container>
                            <Header style={headerSaly}>
                                <Text style={headerTextSaly}>Thời gian làm mỗi ngày</Text>
                            </Header>
                            <Content style={contentSaly}>
                                <View style={itemSaly}>
                                    <View style={itemLableSaly}>
                                        <Text>3 giờ đầu : </Text>
                                    </View>
                                    <View style={itemTextSaly}>
                                        <TextInput />
                                    </View>
                                </View>
                                <View style={itemSaly}>
                                    <View style={itemLableSaly}>
                                        <Text>2 giờ sau : </Text>
                                    </View>
                                    <View style={itemTextSaly}>
                                        <TextInput />
                                    </View>
                                </View>
                            </Content>
                        </Container>
                    </View>
                    <View style={{ margin: 10, height: 170, marginBottom: 50 }}>
                        <Container>
                            <Header style={headerWorkDay}>
                                <Text style={headerTextSaly}>Ngày làm trong tuần</Text>
                            </Header>
                            <View style={contentWorkDay}>
                                {listDay.map((item, index) => (
                                    <View key={index} style={itemWorkDay}>
                                        <View style={{ marginRight: 15 }}><CheckBox checked={true} /></View>
                                        <View ><Text>{item}</Text></View>
                                    </View>
                                ))}
                                <View style={itemWorkDayLast}>
                                    <View style={{ marginRight: 15 }}><CheckBox /></View>
                                    <View><Text>Chủ nhật</Text></View>
                                </View>
                            </View>
                        </Container>
                    </View>
                </Content>
            </Container>
        )
    }
}