import React, { Component } from 'react';
import { View, Image, FlatList, TextInput } from 'react-native';
import { Container, Header, Body, Content, Footer, Text, Button, Icon, List, ListItem, Item } from 'native-base';

import MainHeader from '../main/MainHeader';

import ProductDetailStyle from '../../../public/css/product/ProductDetailStyle';
import CommonStyle from '../../../public/css/common/CommonStyle';

export default class ProductDetail extends Component {
    render() {
        var { bodyContent, infor, lableInfor, textInfor } = ProductDetailStyle;
        var {paddingTop20} = CommonStyle;
        return (
            <Container>
                <MainHeader title="Thông tin sản phẩm" showBack={true} backName="ListProduct" navigation={this.props.navigation} />
                <Content style={bodyContent}>
                    <View style={infor}>
                        <View style={lableInfor}>
                            <Text>Tên sản phẩm : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={infor}>
                        <View style={lableInfor}>
                            <Text>Loại sản phẩm : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={infor}>
                        <View style={lableInfor}>
                            <Text>Đơn giá : </Text>
                        </View>
                        <View style={textInfor}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={[infor, paddingTop20]}>
                        <View style={lableInfor}></View>
                        <View style={textInfor}>
                            <Button primary full>
                                <Text>Lưu</Text>
                            </Button>
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}