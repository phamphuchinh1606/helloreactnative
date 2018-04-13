import React, { Component } from 'react';
import { View, TextInput, ListView, Image } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Text, Picker, Item,
    ListItem, Thumbnail, Left, Right, Button, Icon, FooterTab
} from 'native-base';

//Image
import viewIcon from '../../../images/view-icon.png';

import ListTimeKeepingStyle from '../../../public/css/timekeeping/ListTimeKeepingStyle';
import MainHeader from '../main/MainHeader';
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
                    <Button transparent info onPress={() => navigation.navigate("TimeKeeping")}>
                        <Image source={viewIcon} />
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
                <MainHeader navigation={navigation} title="Danh sách chấm công" showMenu={true} />
                <Content style={bodyContent}>
                    <View style={searchInfo}>
                        <View style={searchLable}>
                            <Text>Tuần : </Text>
                        </View>
                        <View style={searchText}>
                            <Picker
                                mode="dropdown"
                                headerBackButtonText="Chọn tuần"
                                selectedValue={this.state.weekValue}
                                onValueChange={(itemValue, itemIndex) => this.setState({ weekValue: itemValue })}
                            >
                                <Item label="Tuần 1" value="1" />
                                <Item label="Tuần 2" value="2" />
                                <Item label="Tuần 3" value="3" />
                                <Item label="Tuần 4" value="4" />
                                <Item label="Tuần 5" value="5" />
                            </Picker>
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