import React, { Component } from 'react';
import { Image, Text, ListView, TouchableOpacity } from 'react-native';
import {
    Container, Header, Content, Footer, Title, Left, Body, Button,
    List, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import MenuStyle from '../../public/css/MenuStyle';

//Image
import * as ImageCommon from '../common/ImagesCommon';

const listMenu = [
    {
        id: 1,
        name: 'Nhân viên',
        imageIcon: ImageCommon.EmployeeIcon,
        screenName: 'Employees'
    },
    {
        id: 2,
        name: 'Sản phẩm',
        imageIcon: ImageCommon.ProductIcon,
        screenName: 'ListProduct'
    },
    {
        id: 3,
        name: 'Chấm công',
        imageIcon: ImageCommon.TimeKeepingIcon,
        screenName: 'ListTimeKeeping'
    },
    {
        id: 4,
        name: 'Lương nhân viên',
        imageIcon: ImageCommon.SalaryIcon,
        screenName: 'EmployeeSalary'
    },
    {
        id: 5,
        name: 'Doanh số bán hàng',
        imageIcon: ImageCommon.SaleIcon,
        screenName: 'ListOrder'
    },
    {
        id: 6,
        name: 'Đơn mua hàng',
        imageIcon: ImageCommon.PurchaseIcon,
        screenName: 'ListPurchaseOrder'
    },
    {
        id: 8,
        name: 'Phiếu chi',
        imageIcon: ImageCommon.PaymentSlipIcon,
        screenName: 'ListPaymentSlip'
    },
    {
        id: 9,
        name: 'Tồn kho',
        imageIcon: ImageCommon.InventoryIcon,
        screenName: 'ListInventory'
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
        var {menuItem,imageIcon,textItem} = MenuStyle;
        return (
            <ListItem icon style={menuItem}>
                <Left>
                    <Image source={rowData.imageIcon} style={imageIcon}/>
                </Left>
                <Body>
                    <TouchableOpacity onPress={()=>navigation.navigate(rowData.screenName)}>
                        <Text style={textItem}>{rowData.name}</Text>
                    </TouchableOpacity>
                </Body>
            </ListItem>

        );
    }

    render() {
        var {headerMenu,footer,footerItem,textFooter} = MenuStyle;
        return (
            <Container>
                <Header style={headerMenu}>
                    <Title>Phạm Phú Chinh</Title>
                </Header>
                <Content style={{ backgroundColor: '#ffff' }}>
                    <List>
                        <ListView
                            dataSource={this.state.listMenu}
                            renderRow={(rowData) => this.renderRowListMenuItem(rowData)}
                        />
                    </List>
                </Content>
                <Footer style={footer}>
                    <Button transparent style={footerItem}>
                        <Image source={ImageCommon.LogoutIcon}/>
                        <Text style={textFooter}>Đăng xuất</Text>
                    </Button>
                </Footer>
            </Container>
        )
    }
}