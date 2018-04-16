import React, { Component } from 'react';
import { View, TextInput, ListView, Image } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Text, Item,
    ListItem, Thumbnail, Left, Right, Button, Icon, FooterTab
} from 'native-base';

//Image
import * as ImageCommon from '../../common/ImagesCommon';
import PickerCommon from '../common/PickerCommon';
import Utils from '../../common/Utils';

import ListTimeKeepingStyle from '../../../public/css/timekeeping/ListTimeKeepingStyle';
import MainHeader from '../main/MainHeader';
import MainFooter from '../main/MainFooter';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import CommonStyle from '../../../public/css/common/CommonStyle';

const listTimeKeeping = [
    {
        id: 1,
        date: '14/02/2018',
        amount: '350,000đ',

    },
    {
        id: 2,
        date: '14/02/2018',
        amount: '200,000đ'
    },
    {
        id: 2,
        date: '14/02/2018',
        amount: '200,000đ'
    },
    {
        id: 2,
        date: '14/02/2018',
        amount: '200,000đ'
    },
    {
        id: 2,
        date: '14/02/2018',
        amount: '200,000đ'
    }
];

const listWeek = Utils.renderItemWeekPicker();

export default class ListTimeKeeping extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            weekValue: "1",
            listEmployees: ds.cloneWithRows(listTimeKeeping)
        }
    }

    renderRowListEmployees(item) {
        var { navigation } = this.props;
        var { resultItem, itemLeft, itemBody,itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text>{item.date}</Text>
                </View>
                <View style={[itemBody,itemBodyNumber]}>
                    <Text>{item.amount}</Text>
                </View>
                <View style={itemRight}>
                        <Image source={ImageCommon.ViewIcon} />
                    <Button transparent info onPress={() => navigation.navigate("TimeKeeping")}>
                    </Button>
                </View>
            </ListItem>
        );
    }

    render() {
        var { bodyContent, searchInfo, searchLable, searchText,
            resultTitle } = ListTimeKeepingStyle;
        var { resultTotal, totalLeft, totalBody, totalRight } = FlatListCommonStyle;
        var { fontWeight, fontSize18 } = CommonStyle;
        var { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: '#EEE9E9' }}>
                <MainHeader navigation={navigation} title="Danh sách chấm công" showMenu={true} iconLeft={ImageCommon.TimeKeepingIcon} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Tuần : </Text>
                        </View>
                        <View style={searchText}>
                            <PickerCommon data={listWeek} selectedValue={this.state.weekValue}
                                headerText = "Chọn tuần"
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
                        <Text style={resultTitle}>Danh sách ngày công</Text>
                        <ListView
                            dataSource={this.state.listEmployees}
                            renderRow={(rowData) => this.renderRowListEmployees(rowData)}
                        />
                        {/* List Total */}
                        <ListItem style={resultTotal}>
                            <View style={totalLeft}>
                                <Text style={fontWeight}>Tổng cộng</Text>
                            </View>
                            <View style={totalBody}>
                                <Text style={fontWeight}>1,5000,000đ</Text>
                            </View>
                            <View style={totalRight}>
                                
                            </View>
                        </ListItem>
                    </View>
                </Content>
                <MainFooter/>
            </Container>
        )
    }
}