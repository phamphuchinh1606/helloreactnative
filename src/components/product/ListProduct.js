import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import {
    Container, Header, Body, Content, Footer, Text, Button, Icon, List, ListItem, Item, Input,
    Left, Right
} from 'native-base';

import MainHeader from '../main/MainHeader';

import ListProductStyle from '../../../public/css/product/ListProductStyle';
import FlatListCommonStyle from '../../../public/css/common/FlatListCommonStyle';
import CommonStyle from '../../../public/css/common/CommonStyle';

//Image
import * as ImageCommon from '../../common/ImagesCommon';

const listProduct = [
    {
        id: 1,
        name: 'Hamburger',
        type: 'Thành phẩm',
        price: '20,000đ'
    },
    {
        id: 2,
        name: 'Pita',
        type: 'Thành phẩm',
        price: '20,000đ'
    },
    {
        id: 3,
        name: 'Hot-dot',
        type: 'Thành phẩm',
        price: '20,000đ'
    },
    {
        id: 4,
        name: 'Sandwich',
        type: 'Thành phẩm',
        price: '20,000đ'
    },
    {
        id: 5,
        name: 'Bánh humburger',
        type: 'Nguyên liệu',
        price: '6,000đ'
    }
];

export default class ListProduct extends Component {

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft, itemBody, itemBodyText, itemRight } = FlatListCommonStyle;
        return (
            <ListItem style={resultItem} key={item.id}>
                <View style={itemLeft}>
                    <Text>{item.name}</Text>
                </View>
                <View style={[itemBody, itemBodyText]}>
                    <Text>{item.type}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.price}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        var { navigation } = this.props;
        var { bodyContent, resultTitle } = ListProductStyle;
        var { ImageWH40, flexDirecRowBetween, paddingTop10, paddingRight10 } = CommonStyle;
        return (
            <Container>
                <MainHeader navigation={navigation} title="Sản phẩm" showMenu={true} iconLeft={ImageCommon.ProductIcon} />
                <Content>
                    <Header searchBar rounded>
                        <Item>
                            <Icon active name='search' />
                            <Input placeholder='Tìm kiếm theo tên' />
                        </Item>
                    </Header>
                    <Content style={bodyContent}>
                        <View style={[flexDirecRowBetween, paddingTop10, paddingRight10]}>
                            <Left>
                                <Text style={resultTitle}>Danh sách sản phẩm</Text>
                            </Left>
                            <Right>
                                <Button transparent onPress={() => { this.props.navigation.navigate("ProductDetail") }}>
                                    <Image source={ImageCommon.AddIcon} style={ImageWH40} />
                                </Button>
                            </Right>
                        </View>

                        <FlatList
                            data={listProduct}
                            renderItem={this._renderItem}
                        />
                    </Content>
                </Content>
            </Container>
        )
    }
}