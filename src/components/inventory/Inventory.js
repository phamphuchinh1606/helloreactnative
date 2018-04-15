import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Image, FlatList } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    Container, Header, Body, Content, Footer, Text, Button, Title, Left, Right, ListItem, Picker, Item,
    Label, Input
} from 'native-base';

import CommonStyle from '../../../public/css/common/CommonStyle';
import ModalStyle from '../../../public/css/common/ModalStyle';
import InventoryStyle from '../../../public/css/inventory/InventoryStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';

//Common
import MainHeader from '../main/MainHeader';
import Utils from '../../common/Utils';
import PickerCommon from '../common/PickerCommon';

//Image
import * as ImagesCommon from '../../common/ImagesCommon';

const listPayment = [
    {
        reson: "Mua pessi",
        qty: 2,
        amount: "150,000đ"
    },
    {
        reson: "Mua khăn giấy",
        qty: 5,
        amount: "250,000đ"
    }
]

const listKeyProduct = [
    {
        value: '1',
        label: 'Banh Hambuger'
    },
    {
        value: '2',
        label: 'Banh Pita'
    },
    {
        value: '3',
        label: 'Banh Hot-dot'
    }
];

export default class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderPayment: new Date(),
            isDateTimePickerVisible: false,
            isOpen: false,
            selectedProduct: ''
        }
        this.setDate = this.setDate.bind(this);
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ orderPayment: date });
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    setDate(newDate) {
        this.setState({ orderPayment: newDate })
    }

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft, itemBody, itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text>{item.reson}</Text>
                </View>
                <View style={[itemBody, itemBodyNumber]}>
                    <Text>{item.qty}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.amount}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        var { bodyContent, ImageWH40, fontWeight, fontSize18, height350 } = CommonStyle;
        var { headerContent, contentItemLable, contentItemText, contentlableTitle,
            listTitle, textTitleList, itemInfo, ItemInfoLable, ItemInfoText } = InventoryStyle;
        var { resultTotal, totalLeft, totalBody, totalBodyNumber, totalRight } = FlatListCommonStyle;
        let { modalBody, modalContent, modalFooter, modalButton,
            modalItem, modalItemLable, modalItemText } = ModalStyle;
        let BContent = <Button onPress={() => this.setState({ isOpen: false })}><Text>X</Text></Button>;
        return (
            <Container>
                <MainHeader title="Nhập tồn cuối ngày" showBack={true} backName="ListInventory" navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <TouchableOpacity style={headerContent} onPress={this._showDateTimePicker}>
                        <View style={contentItemLable}>
                            <Text style={contentlableTitle}>Ngày : </Text>
                        </View>
                        <View style={contentItemText}>
                            <Text style={contentlableTitle}>{Utils.formatDate(this.state.orderPayment)}       {Utils.dayOfWeekDate(this.state.chosenDate)}</Text>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={itemInfo}>
                        <View style={ItemInfoLable}>
                            <Text>Hambuger : </Text>
                        </View>
                        <View style={ItemInfoText}>
                            <Item>
                                <Input keyboardType="numeric" value="100" />
                            </Item>
                        </View>
                    </View>
                    <View style={itemInfo}>
                        <View style={ItemInfoLable}>
                            <Text>Pit : </Text>
                        </View>
                        <View style={ItemInfoText}>
                            <Item>
                                <Input keyboardType="numeric" value="100" />
                            </Item>
                        </View>
                    </View>
                    <View style={itemInfo}>
                        <View style={ItemInfoLable}>
                            <Text>Hot-dot : </Text>
                        </View>
                        <View style={ItemInfoText}>
                            <Item>
                                <Input keyboardType="numeric" value="100" />
                            </Item>
                        </View>
                    </View>
                    <View style={itemInfo}>
                        <View style={ItemInfoLable}>
                            <Text>Sandwich : </Text>
                        </View>
                        <View style={ItemInfoText}>
                            <Item>
                                <Input keyboardType="numeric" value="100" />
                            </Item>
                        </View>
                    </View>
                </Content>

            </Container>
        )
    }
}