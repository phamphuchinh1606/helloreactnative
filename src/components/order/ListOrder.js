import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import {
    Container, Header, Body, Content, Footer, Text, Button, Icon, List, ListItem, Item, Input,
    Left, Right, Title, FooterTab
} from 'native-base';

import MainHeader from '../main/MainHeader';
import PickerCommon from '../common/PickerCommon';

import CommonStyle from '../../../public/css/common/CommonStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import ListOrderStyle from '../../../public/css/order/ListOrderStyle';

//Image
import addIcon from '../../../images/add-icon.png';

const listOrder = [
    {
        id: 1,
        date: '12/02/2018',
        totalQty: '105',
        totalAmount: '2,500,000đ'
    },
    {
        id: 2,
        date: '13/02/2018',
        totalQty: '105',
        totalAmount: '2,500,000đ'
    },
    {
        id: 3,
        date: '14/02/2018',
        totalQty: '105',
        totalAmount: '3,500,000đ'
    },
    {
        id: 4,
        date: '15/02/2018',
        totalQty: '105',
        totalAmount: '4,500,000đ'
    },
    {
        id: 5,
        date: '16/02/2018',
        totalQty: '105',
        totalAmount: '5,500,000đ'
    }
];

const listWeek = [
    {
        value: "1",
        label: "tuần 1"
    },
    {
        value: "2",
        label: "tuần 2"
    },
    {
        value: "3",
        label: "tuần 3"
    },
    {
        value: "4",
        label: "tuần 4"
    },
    {
        value: "5",
        label: "tuần 5"
    }
];

export default class ListOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekValue: null
        }
    }

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft1, itemBody, itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft1}>
                    <Text>{item.date}</Text>
                </View>
                <View style={[itemBody, itemBodyNumber]}>
                    <Text>{item.totalQty}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.totalAmount}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        var { bodyContent, fontWeight, fontSize18, marginTop10, marginBottom10, 
            flexDirecRowBetween, paddingTop10, paddingRight10 ,ImageWH40} = CommonStyle;
        var { searchInfo, searchLabel, searchText, resultTitle } = ListOrderStyle;
        return (
            <Container>
                <MainHeader title="Doanh số bán hàng" showMenu={true} navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Tuần : </Text>
                        </View>
                        <View style={searchText}>
                            <PickerCommon data={listWeek} headerText="Chọn tuần" value={this.state.weekValue}
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
                    <View style={[flexDirecRowBetween, paddingTop10, paddingRight10]}>
                        <Left>
                            <Text style={resultTitle}>Danh sách sản phẩm</Text>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => { this.props.navigation.navigate("InputOrder") }}>
                                <Image source={addIcon} style={ImageWH40} />
                            </Button>
                        </Right>
                    </View>
                    <List >
                        <FlatList
                            data={listOrder}
                            renderItem={this._renderItem}
                        />
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="apps" active />
                            <Text>Tuần</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Tháng</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}