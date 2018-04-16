import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import {
    Container, Header, Body, Content, Footer, Text, Button, Icon, List, ListItem, Item, Input,
    Left, Right, Title, FooterTab
} from 'native-base';

import MainHeader from '../main/MainHeader';
import MainFooter from '../main/MainFooter';
import PickerCommon from '../common/PickerCommon';
import * as ImagesCommon from '../../common/ImagesCommon';
import Utils from '../../common/Utils';

import CommonStyle from '../../../public/css/common/CommonStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import ListPurchaseOrderStyle from '../../../public/css/purchase/ListPurchaseOrderStyle';

//Image
import addIcon from '../../../images/add-icon.png';

const listOrder = [
    {
        id: 10001,
        date: '12/02/2018',
        totalAmount: '2,500,000đ'
    },
    {
        id: 10002,
        date: '13/02/2018',
        totalAmount: '2,500,000đ'
    },
    {
        id: 10003,
        date: '14/02/2018',
        totalAmount: '3,500,000đ'
    },
    {
        id: 10004,
        date: '15/02/2018',
        totalQty: '105',
        totalAmount: '4,500,000đ'
    },
    {
        id: 10005,
        date: '16/02/2018',
        totalAmount: '5,500,000đ'
    }
];

const listMonth = Utils.renderItemMonthPicker();

export default class ListPurchaseOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekValue: null
        }
    }

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft1, itemBody, itemBodyText, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft1}>
                    <Text>{item.id}</Text>
                </View>
                <View style={[itemBody, itemBodyText]}>
                    <Text>{item.date}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.totalAmount}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        var { bodyContent, fontWeight, fontSize18, marginTop10, marginBottom10,
            flexDirecRowStart, flexDirecRowEnd, paddingTop10, paddingRight10, ImageWH40 } = CommonStyle;
        var { searchInfo, searchLabel, searchText, resultTitle } = ListPurchaseOrderStyle;
        return (
            <Container>
                <MainHeader title="Đơn Nhập Hàng" showMenu={true} navigation={this.props.navigation} 
                    iconLeft={ImagesCommon.PurchaseIcon}/>
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Tháng : </Text>
                        </View>
                        <View style={searchText}>
                            <PickerCommon data={listMonth} headerText="Chọn tháng" value={this.state.weekValue}
                                onValueChange={(itemValue, itemIndex) => this.setState({ weekValue: itemValue })} />
                        </View>
                    </View>
                    <View style={searchInfo}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Thời gian : </Text>
                        </View>
                        <View style={searchText}>
                            <Text style={fontSize18}> Từ 14/02/2018 đến 13/03/2018 </Text>
                        </View>
                    </View>
                    <View style={[searchInfo, marginTop10, marginBottom10]}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Tổng tiền : </Text>
                        </View>
                        <View style={searchText}>
                            <Text style={fontSize18}> 3,500,000đ </Text>
                        </View>
                    </View>
                    <View style={[flexDirecRowStart, paddingTop10, paddingRight10]}>
                        <Text style={resultTitle}>Danh sách đơn nhập hàng</Text>
                        <View style={flexDirecRowEnd}>
                            <Button transparent onPress={() => { this.props.navigation.navigate("PurchaseOrder") }}>
                                <Image source={ImagesCommon.AddIcon} style={ImageWH40} />
                            </Button>
                        </View>
                    </View>
                    <List >
                        <FlatList
                            data={listOrder}
                            renderItem={this._renderItem}
                        />
                    </List>
                </Content>
                <MainFooter/>
            </Container>
        )
    }
}