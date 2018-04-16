import React, { Component } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Text, Picker, Item,
    ListItem, Thumbnail, Left, Right, Button, Icon, FooterTab
} from 'native-base';

import * as ImageCommon from '../../common/ImagesCommon';
import Utils from '../../common/Utils';
import PickerCommon from '../common/PickerCommon';

import EmployeeSalaryStyle from '../../../public/css/salary/EmployeeSalaryStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import MainHeader from '../main/MainHeader';
import MainFooter from '../main/MainFooter';

const listEmployeeSalary = [
    {
        id: 1,
        name: 'Pham Phu Chinh',
        totalHours: '1 giờ',
        amount: '100,000đ'
    },
    {
        id: 2,
        name: 'pham dang thuy',
        totalHours: '3 giờ',
        amount: '200,000đ'
    },
    {
        id: 3,
        name: 'Phạm Thị Ly',
        totalHours: '2 giờ',
        amount: '200,000đ'
    },
    {
        id: 4,
        name: 'Đoàn Nhân',
        totalHours: '5 giờ',
        amount: '200,000đ',
        image: require('../../../images/thuy.png')
    },
    {
        id: 5,
        name: 'Lương Trang',
        totalHours: '5 giờ',
        amount: '200,000đ'
    }
];

const listWeek = Utils.renderItemWeekPicker();

export default class EmployeeSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekValue: "1"
        }
    }

    _renderItem = ({ item }) => {
        var { navigation } = this.props;
        var { resultItem, itemLeft1, itemBody, itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <Left style={itemLeft1}>
                    <Text>{item.name}</Text>
                </Left>
                <Body style={[itemBody,itemBodyNumber]}>
                    <Text>{item.totalHours}</Text>
                </Body>
                <Right style={itemRight}>
                    <Text>{item.amount}</Text>
                </Right>
            </ListItem>
        );
    }

    render() {
        var { bodyContent, searchInfo, searchLable, searchText,
            resultTitle } = EmployeeSalaryStyle;
        var { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: '#EEE9E9' }}>
                <MainHeader navigation={navigation} title="Lương nhân viên" showMenu={true} iconLeft={ImageCommon.SalaryIcon} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Tuần : </Text>
                        </View>
                        <View style={searchText}>
                            <PickerCommon data={listWeek} selectedValue={this.state.weekValue} 
                                headerText="Chọn tuần"
                                onValueChange={(itemValue, itemIndex) => this.setState({ weekValue: itemValue })}/>
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
                    <View>
                        <Text style={resultTitle}>Danh sách nhân viên</Text>
                        <FlatList
                            data={listEmployeeSalary}
                            renderItem={this._renderItem}
                        />
                    </View>
                </Content>
                <MainFooter/>
            </Container>
        )
    }
}