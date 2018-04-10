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
        action: Actions.Employees
    },
    {
        id: 2,
        name: 'Bán hàng',
        imageIcon: orderIcon,
        action: Actions.Employees
    },
    {
        id: 3,
        name: 'Phiếu thu',
        imageIcon: receiptIcon,
        action: Actions.Employees
    },
    {
        id: 4,
        name: 'Phiếu chi',
        imageIcon: paymentSlipIcon,
        action: Actions.Employees
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
        var { navigator } = this.props;
        console.log(navigator);
        return (
            <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                <Left>
                    <Image source={rowData.imageIcon} />
                </Left>
                <Body>
                    <TouchableOpacity>
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
            // <View style={bodyMenu}>
            //     <View style={userInfor}>
            //         <Image source={userIcon} />
            //         <Text style={userInforText}>Pham Phu Chinh</Text>
            //     </View>
            //     <View style={cotentMenu}>
            //         <ScrollView>
            //             <TouchableOpacity style={menuItem} onPress={() => this._goToEmployees()}>
            //                 <Image source={employeeIcon} />
            //                 <Text style={textItem}>Nhân viên</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={orderIcon} />
            //                 <Text style={textItem}>Bán hàng</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={receiptIcon} />
            //                 <Text style={textItem}>Phiếu chi</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={paymentSlipIcon} />
            //                 <Text style={textItem}>Phiếu thu</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={employeeIcon} />
            //                 <Text style={textItem}>Nhân viên</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={orderIcon} />
            //                 <Text style={textItem}>Bán hàng</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={receiptIcon} />
            //                 <Text style={textItem}>Phiếu chi</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity style={menuItem}>
            //                 <Image source={paymentSlipIcon} />
            //                 <Text style={textItem}>Phiếu thu</Text>
            //             </TouchableOpacity>
            //         </ScrollView>
            //     </View>
            //     <View style={footer}>
            //         <TouchableOpacity style={footerItem}>
            //             <Image source={logoutIcon} />
            //             <Text style={textFooter}>Đăng xuất</Text>
            //         </TouchableOpacity>
            //     </View>
            // </View>
        )
    }
}