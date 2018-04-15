import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import {
    Container, Header, Body, Content, Footer, Text, Button, Icon, List, ListItem, Item, Input,
    Left, Right, Title, FooterTab
} from 'native-base';

import MainHeader from '../main/MainHeader';
import PickerCommon from '../common/PickerCommon';
import Utils from '../../common/Utils';

import CommonStyle from '../../../public/css/common/CommonStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import ListInventoryStyle from '../../../public/css/inventory/ListInventoryStyle';

//Image
import * as ImageCommon from '../../common/ImagesCommon';

const listPaymentSlip = [
    {
        date: '12/02/2018',
        totalQty : '100'
    },
    {
        date: '13/02/2018',
        totalQty : '110'
    },
    {
        date: '14/02/2018',
        totalQty : '120'
    },
    {
        date: '15/02/2018',
        totalQty : '130'
    }
];

const listWeek = Utils.renderItemWeekPicker();

export default class ListInventory extends Component {
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
                    <Button onPress={()=>this.props.navigation.navigate("Inventory")}>
                        <Text>View</Text>
                    </Button>
                </View>
            </ListItem>
        )
    }

    render() {
        var { bodyContent, fontWeight, fontSize18, marginTop10, marginBottom10,
            flexDirecRowStart, flexDirecRowEnd, paddingTop10, paddingRight10, ImageWH40 } = CommonStyle;
        var { searchInfo, searchLabel, searchText, resultTitle } = ListInventoryStyle;
        return (
            <Container>
                <MainHeader title="Danh sách tồn" showMenu={true} navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLabel}>
                            <Text style={[fontWeight, fontSize18]}>Tuần : </Text>
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
                    <View style={[flexDirecRowStart, paddingTop10, paddingRight10]}>
                        <Text style={resultTitle}>Danh sách tồn theo ngày</Text>
                        <View style={flexDirecRowEnd}>
                            <Button transparent onPress={() => { this.props.navigation.navigate("Inventory") }}>
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
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="apps" active />
                            <Text>Tháng</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Ngày</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}