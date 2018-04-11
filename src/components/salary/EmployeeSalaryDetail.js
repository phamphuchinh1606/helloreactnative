import React, { Component } from 'react';
import { View, TextInput, ListView } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Text, Picker, Item,
    ListItem, Thumbnail, Left, Right, Button, Icon, FooterTab
} from 'native-base';

import EmployeeSalaryDetailStyle from '../../../public/css/salary/EmployeeSalaryDetailStyle';
import MainHeader from '../main/MainHeader';

const listNhanVien = [
    {
        id: 1,
        house: "5 giờ",
        amount: '100,000đ',
        date: "14/02/2018"
    },
    {
        id: 2,
        house: "5 giờ",
        amount: '200,000đ',
        date: "15/02/2018"
    },{
        id: 3,
        house: "5 giờ",
        amount: '100,000đ',
        date: "14/02/2018"
    },
    {
        id: 4,
        house: "5 giờ",
        amount: '200,000đ',
        date: "15/02/2018"
    },
    {
        id: 5,
        house: "5 giờ",
        amount: '100,000đ',
        date: "14/02/2018"
    },
    {
        id: 6,
        house: "5 giờ",
        amount: '200,000đ',
        date: "15/02/2018"
    }
];

export default class EmployeeSalary extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            weekValue: "1",
            listEmployees: ds.cloneWithRows(listNhanVien)
        }
    }

    renderRowListEmployees(rowData) {
        var { navigation } = this.props;
        var { resultItem, itemLeft, itemBody,itemRight } = EmployeeSalaryDetailStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text>{rowData.date}</Text>
                </View>
                <View style={itemBody}>
                    <Text>{rowData.house}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{rowData.amount}</Text>
                </View>
            </ListItem>
        );
    }

    render() {
        var { bodyContent, searchInfo, searchLable, searchText,
            resultTitle} = EmployeeSalaryDetailStyle;
        var { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: '#EEE9E9' }}>
                <MainHeader navigation={navigation} title="Phạm phú chinh" showBack={true} backName="EmployeeSalary"/>
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Thời gian : </Text>
                        </View>
                        <View style={searchText}>
                            <Text> Từ 14/02/2018 đến 13/03/2018 </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={resultTitle}>Danh sách ngày công</Text>
                        <ListView
                            dataSource={this.state.listEmployees}
                            renderRow={(rowData) => this.renderRowListEmployees(rowData)}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}