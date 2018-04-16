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
import ListPaymentSlipStyle from '../../../public/css/payment-slip/ListPaymentSlipStyle';

//Image
import * as ImageCommon from '../../common/ImagesCommon';

const listPaymentSlip = [
    {
        id: 10001,
        date: '12/02/2018',
        reson : 'Mua Pessi',
        totalAmount: '150,000đ'
    },
    {
        id: 10002,
        date: '13/02/2018',
        reson : 'Mua khăn giấy',
        totalAmount: '15,000đ'
    },{
        id: 10003,
        date: '14/02/2018',
        reson : 'Mua tương ớt',
        totalAmount: '150,000đ'
    },{
        id: 10004,
        date: '15/02/2018',
        reson : 'Mua bao tay',
        totalAmount: '250,000đ'
    },
];

const listWeek = Utils.renderItemWeekPicker();

export default class ListPaymentSlip extends Component {
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
        var { searchInfo, searchLabel, searchText, resultTitle } = ListPaymentSlipStyle;
        return (
            <Container>
                <MainHeader title="Phiếu chi" showMenu={true} navigation={this.props.navigation} 
                    iconLeft={ImagesCommon.PaymentSlipIcon}/>
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Tháng : </Text>
                        </View>
                        <View style={searchText}>
                            <PickerCommon data={listWeek} headerText="Chọn tuần" value={this.state.weekValue}
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
                        <Text style={resultTitle}>Danh sách phiếu chi</Text>
                        <View style={flexDirecRowEnd}>
                            <Button transparent onPress={() => { this.props.navigation.navigate("PaymentSlip") }}>
                                <Image source={ImageCommon.AddIcon} style={ImageWH40} />
                            </Button>
                        </View>
                    </View>
                    <List >
                        <FlatList
                            data={listPaymentSlip}
                            renderItem={this._renderItem}
                        />
                    </List>
                </Content>
                <MainFooter/>
            </Container>
        )
    }
}