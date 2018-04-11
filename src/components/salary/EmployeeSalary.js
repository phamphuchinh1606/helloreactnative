import React, { Component } from 'react';
import { View, TextInput, ListView } from 'react-native';
import {
    Container, Header, Content, Footer, Body, Text, Picker, Item,
    ListItem, Thumbnail, Left, Right, Button, Icon, FooterTab
} from 'native-base';

import EmployeeSalaryStyle from '../../../public/css/salary/EmployeeSalaryStyle';
import MainHeader from '../main/MainHeader';

const listNhanVien = [
    {
        id: 1,
        name: 'Pham Phu Chinh',
        amount: '100,000đ',
        image: require('../../../images/chinh.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        amount: '200,000đ',
        image: require('../../../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        amount: '200,000đ',
        image: require('../../../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        amount: '200,000đ',
        image: require('../../../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        amount: '200,000đ',
        image: require('../../../images/thuy.png')
    }
];

export default class EmployeeSalary extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            weekValue: "1",
            listEmployees: ds.cloneWithRows(listNhanVien)
        }
    }

    renderRowListEmployees(rowData) {
        var { navigation } = this.props;
        return (
            <ListItem>
                <Left>
                    <Text>{rowData.name}</Text>
                </Left>
                <Body>
                    <Text>{rowData.amount}</Text>
                </Body>
                <Right>
                    <Button transparent info onPress={()=>navigation.navigate("EmployeeSalaryDetail")}>
                        <Icon name="navigate" />
                    </Button>
                </Right>
            </ListItem>
        );
    }

    render() {
        var { bodyContent, searchInfo, searchLable, searchText,
            resultTitle } = EmployeeSalaryStyle;
        var { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: '#EEE9E9' }}>
                <MainHeader navigation={navigation} title="Lương nhân viên" showMenu={true} />
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
                        <Text style={resultTitle}>Danh sách nhân viên</Text>
                        <ListView
                            dataSource={this.state.listEmployees}
                            renderRow={(rowData) => this.renderRowListEmployees(rowData)}
                        />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="apps" active/>
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