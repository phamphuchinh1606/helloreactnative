import React, { Component } from 'react';
import { TouchableOpacity, View, TextInput, Image, FlatList } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    Container, Header, Content, Footer, Body, Button, Text, Item, Input, Label,
    Left, Right, ListItem
} from 'native-base';

import CommonStyle from '../../../public/css/common/CommonStyle';
import PurchaseOrderStyle from '../../../public/css/purchase/PurchaseOrderStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';

//Common
import MainHeader from '../main/MainHeader';
import Utils from '../../common/Utils';

//Image
import * as ImagesCommon from '../../common/ImagesCommon';

const listProduct = [
    {
        id: 1,
        name: "Bánh Hambuger",
        qty: 2,
        amount: "150,000đ"
    },
    {
        id: 2,
        name: "Bánh Pit",
        qty: 5,
        amount: "250,000đ"
    }
]

export default class PurchaseOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDate: new Date(),
            isDateTimePickerVisible: false
        }
        this.setDate = this.setDate.bind(this);
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ orderDate: date });
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    setDate(newDate) {
        this.setState({ orderDate: newDate })
    }

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft, itemBody,itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text>{item.name}</Text>
                </View>
                <View style={[itemBody,itemBodyNumber]}>
                    <Text>{item.qty}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.amount}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        var { bodyContent, ImageWH40,fontWeight } = CommonStyle;
        var { headerContent, contentItemLable, contentItemText, contentlableTitle,
            listTitle, textTitleList } = PurchaseOrderStyle;
        var { resultTotal, totalLeft, totalBody,totalBodyNumber, totalRight } = FlatListCommonStyle;
        return (
            <Container>
                <MainHeader title="Đơn nhập hàng" showBack={true} backName="ListOrder" navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <TouchableOpacity style={headerContent} onPress={this._showDateTimePicker}>
                        <View style={contentItemLable}>
                            <Text style={contentlableTitle}>Ngày chấm công : </Text>
                        </View>
                        <View style={contentItemText}>
                            <Text style={contentlableTitle}>{Utils.formatDate(this.state.orderDate)}       {Utils.dayOfWeekDate(this.state.chosenDate)}</Text>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={listTitle}>
                        <Left>
                            <Text style={textTitleList}>Danh sách sản phẩm</Text>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => { this.setState({ isOpen: true }) }}>
                                <Image source={ImagesCommon.AddIcon} style={ImageWH40} />
                            </Button>
                        </Right>
                    </View>
                    <FlatList
                        data={listProduct}
                        renderItem={this._renderItem}
                    />
                    {/* List Total */}
                    <ListItem style={resultTotal}>
                        <View style={totalLeft}>
                            <Text style={fontWeight}>Tổng cộng</Text>
                        </View>
                        <View style={[totalBody,totalBodyNumber]}>
                            <Text style={fontWeight}>20</Text>
                        </View>
                        <View style={totalRight}>
                            <Text style={fontWeight}>700,000đ</Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}