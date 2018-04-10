import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation'
import MenuStyle from '../../../public/css/MenuStyle';

//Image
import userIcon from '../../../images/menu/user-menu.png';
import logoutIcon from '../../../images/menu/logout.png';
import employeeIcon from '../../../images/menu/employee.png';
import orderIcon from '../../../images/menu/order-sale.png';
import paymentSlipIcon from '../../../images/menu/payment-slip.png';
import receiptIcon from '../../../images/menu/receipt.png';

const backAction = NavigationActions.back({
    key: 'Employees'   // if you want to go back to B
})

export default class Menu extends Component {
    _goToEmployees(){
        var {navigation} = this.props;
        var {navigate} = navigation;
        navigate('Employees');
        navigation.dispatch(backAction);
    }

    render() {
        var { bodyMenu, userInfor, cotentMenu, userInforText, menuItem, textItem, footer, footerItem, textFooter } = MenuStyle;
        return (
            <View style={bodyMenu}>
                <View style={userInfor}>
                    <Image source={userIcon} />
                    <Text style={userInforText}>Pham Phu Chinh</Text>
                </View>
                <View style={cotentMenu}>
                    <ScrollView>
                        <TouchableOpacity style={menuItem} onPress={() => this._goToEmployees()}>
                            <Image source={employeeIcon} />
                            <Text style={textItem}>Nhân viên</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={orderIcon} />
                            <Text style={textItem}>Bán hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={receiptIcon} />
                            <Text style={textItem}>Phiếu chi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={paymentSlipIcon} />
                            <Text style={textItem}>Phiếu thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={employeeIcon} />
                            <Text style={textItem}>Nhân viên</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={orderIcon} />
                            <Text style={textItem}>Bán hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={receiptIcon} />
                            <Text style={textItem}>Phiếu chi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={menuItem}>
                            <Image source={paymentSlipIcon} />
                            <Text style={textItem}>Phiếu thu</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={footer}>
                    <TouchableOpacity style={footerItem}>
                        <Image source={logoutIcon} />
                        <Text style={textFooter}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}