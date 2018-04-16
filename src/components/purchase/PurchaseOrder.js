import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Image, FlatList } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    Container, Header, Body, Content, Footer, Text, Button, Title, Left, Right, ListItem, Picker, Item,
    Label, Input, SwipeRow, Icon
} from 'native-base';
import Modal from 'react-native-modalbox';

import CommonStyle from '../../../public/css/common/CommonStyle';
import ModalStyle from '../../../public/css/common/ModalStyle';
import PurchaseOrderStyle from '../../../public/css/purchase/PurchaseOrderStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';

//Common
import MainHeader from '../main/MainHeader';
import Utils from '../../common/Utils';
import PickerCommon from '../common/PickerCommon';

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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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

export default class PurchaseOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDate: new Date(),
            isDateTimePickerVisible: false,
            isOpen: false,
            selectedProduct: ''
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

    _renderItem = ({ item, index }) => {
        var { resultItem, itemLeft, itemBody, itemBodyNumber, itemRight } = FlatListCommonStyle;
        return (
            <SwipeRow style={{flex:1}}
                // leftOpenValue={75}
                rightOpenValue={-75}
                // left={
                //     <Button success onPress={() => alert('Add')}>
                //         <Icon active name="add" />
                //     </Button>
                // }
                body={
                    <View style={resultItem}>
                        <View style={itemLeft}>
                            <Text>{item.name} {index}</Text>
                        </View>
                        <View style={[itemBody, itemBodyNumber]}>
                            <Text>{item.qty}</Text>
                        </View>
                        <View style={itemRight}>
                            <Text>{item.amount}</Text>
                        </View>
                    </View>
                }
                right={
                    <Button danger onPress={() => alert('Trash')}>
                        <Icon active name="trash" />
                    </Button>
                }
            />
            // <ListItem style={resultItem}>
            //     <View style={itemLeft}>
            //         <Text>{item.name} {index}</Text>
            //     </View>
            //     <View style={[itemBody, itemBodyNumber]}>
            //         <Text>{item.qty}</Text>
            //     </View>
            //     <View style={itemRight}>
            //         <Text>{item.amount}</Text>
            //     </View>
            // </ListItem>
        )
    }

    render() {
        var { bodyContent, ImageWH40, fontWeight, fontSize18, height350 } = CommonStyle;
        var { headerContent, contentItemLable, contentItemText, contentlableTitle,
            listTitle, textTitleList } = PurchaseOrderStyle;
        var { resultTotal, totalLeft, totalBody, totalBodyNumber, totalRight } = FlatListCommonStyle;
        let { modalBody, modalContent, modalFooter, modalButton,
            modalItem, modalItemLable, modalItemText } = ModalStyle;
        let BContent = <Button onPress={() => this.setState({ isOpen: false })}><Text>X</Text></Button>;
        return (
            <Container>
                <MainHeader title="Đơn nhập hàng" showBack={true} backName="ListPurchaseOrder" navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <TouchableOpacity style={headerContent} onPress={this._showDateTimePicker}>
                        <View style={contentItemLable}>
                            <Text style={contentlableTitle}>Ngày nhập hàng : </Text>
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
                        <View>
                            <Text style={textTitleList}>Danh sách sản phẩm</Text>
                        </View>
                        <View>
                            <Button transparent onPress={() => { this.setState({ isOpen: true }) }}>
                                <Image source={ImagesCommon.AddIcon} style={ImageWH40} />
                            </Button>
                        </View>
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
                        <View style={[totalBody, totalBodyNumber]}>
                            <Text style={fontWeight}>20</Text>
                        </View>
                        <View style={totalRight}>
                            <Text style={fontWeight}>700,000đ</Text>
                        </View>
                    </ListItem>
                </Content>
                {/* Dialog modal */}
                <Modal style={[modalBody, height350]} isOpen={this.state.isOpen}
                    onClosed={() => this.setState({ isOpen: false })}
                    position={"center"} backdropContent={BContent}>
                    <Header>
                        <Body>
                            <Title>Thêm nhân viên</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.setState({ isOpen: false })}>
                                <Image source={ImagesCommon.CloseIcon} />
                            </Button>
                        </Right>
                    </Header>
                    <Content style={[modalContent]}>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Nhân viên : </Text>
                            </View>
                            <View style={modalItemText}>
                                <PickerCommon headeText="Chọn sản phẩm" selectedValue={this.state.selectedProduct}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedProduct: itemValue })}
                                    data={listKeyProduct} />
                            </View>
                        </View>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Đơn giá : </Text>
                            </View>
                            <View style={modalItemText}>
                                <Item>
                                    <Input keyboardType="numeric" value="15,000" />
                                </Item>
                            </View>
                        </View>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Số lượng : </Text>
                            </View>
                            <View style={modalItemText}>
                                <Item>
                                    <Input keyboardType="numeric" value="2" />
                                </Item>
                            </View>
                        </View>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Thành tiền : </Text>
                            </View>
                            <View style={modalItemText}>
                                <Item>
                                    <Input keyboardType="numeric" value="30,000" />
                                </Item>
                            </View>
                        </View>
                    </Content>
                    <Footer style={modalFooter}>
                        <Button danger style={modalButton} onPress={() => this.setState({ isOpen: false })}>
                            <Text> Đóng </Text>
                        </Button>
                        <Button primary style={modalButton}>
                            <Text> Thêm </Text>
                        </Button>
                    </Footer>

                </Modal>
            </Container>
        )
    }
}