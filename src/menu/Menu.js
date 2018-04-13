import React, { Component } from 'react';
import { Image, Text, ListView, TouchableOpacity } from 'react-native';
import {
    Container, Header, Content, Footer, Title, Left, Body, Button,
    List, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';

//Image
import userIcon from '../../images/menu/user-menu.png';
import logoutIcon from '../../images/menu/logout.png';
import employeeIcon from '../../images/menu/employee.png';
import orderIcon from '../../images/menu/order-sale.png';
import paymentSlipIcon from '../../images/menu/payment-slip.png';
import receiptIcon from '../../images/menu/receipt.png';

const listMenu = [
    {
        id: 1,
        name: 'Nhân viên',
        imageIcon: employeeIcon,
        screenName: 'Employees'
    },
    {
        id: 2,
        name: 'Sản phẩm',
        imageIcon: employeeIcon,
        screenName: 'ListProduct'
    },
    {
        id: 3,
        name: 'Chấm công',
        imageIcon: employeeIcon,
        screenName: 'ListTimeKeeping'
    },
    {
        id: 4,
        name: 'Lương nhân viên',
        imageIcon: employeeIcon,
        screenName: 'EmployeeSalary'
    },
    {
        id: 5,
        name: 'Doanh số bán hàng',
        imageIcon: orderIcon,
        screenName: 'ListOrder'
    },
    {
        id: 6,
        name: 'Phiếu thu',
        imageIcon: receiptIcon,
        screenName: 'Employees'
    },
    {
        id: 7,
        name: 'Phiếu chi',
        imageIcon: paymentSlipIcon,
        screenName: 'Employees'
    }
];

export default class Menu extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listMenu: ds.cloneWithRows(listMenu)
        }
    }

    renderRowListMenuItem(rowData) {
        var { navigation } = this.props;
        return (
            <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                <Left>
                    <Image source={rowData.imageIcon} />
                </Left>
                <Body>
                    <TouchableOpacity onPress={()=>navigation.navigate(rowData.screenName)}>
                        <Text>{rowData.name}</Text>
                    </TouchableOpacity>
                </Body>
            </ListItem>

        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Menu</Title>
                </Header>
                <Content style={{ backgroundColor: '#ffff' }}>
                    <List>
                        <ListView
                            dataSource={this.state.listMenu}
                            renderRow={(rowData) => this.renderRowListMenuItem(rowData)}
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}