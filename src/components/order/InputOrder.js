import React, { Component } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Container, Header, Content, Footer, Body, Button, Text, Item, Input, Label } from 'native-base';

import CommonStyle from '../../../public/css/common/CommonStyle';
import InputOrderStyle from '../../../public/css/order/InputOrderStyle';

//Common
import MainHeader from '../main/MainHeader';
import Utils from '../../common/Utils';

export default class InputOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDate: new Date(),
            isDateTimePickerVisible: false
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

    render() {
        var { bodyContent, headerItem, headerItemText, contentItem, itemDetail, itemDetailLable, itemDetailText,
            fontSize20, colorBlue, fontWeight, marginLeft20,marginTop20,marginTop10 } = CommonStyle;
        var { headerContent, contentItemLable, contentItemText, contentlableTitle,
            totalItem, totalLabel, totalText } = InputOrderStyle;
        return (
            <Container>
                <MainHeader title="Doanh số bán hàng" showBack={true} backName="ListOrder" navigation={this.props.navigation}/>
                <Content style={bodyContent}>
                    <TouchableOpacity style={headerContent} onPress={this._showDateTimePicker}>
                        <View style={contentItemLable}>
                            <Text style={contentlableTitle}>Ngày chấm công : </Text>
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
                    {/* So Luong banh huy */}
                    <View style={{ margin: 10, height: 300 }}>
                        <Container>
                            <Header style={headerItem}>
                                <Text style={headerItemText}>Số lượng bánh hủy</Text>
                            </Header>
                            <Content style={contentItem}>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Hambuger : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" value="0"/>
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Pita : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" value="0"/>
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Sandwich : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" value="0"/>
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Hot-dot : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" value="0"/>
                                        </Item>
                                    </View>
                                </View>
                            </Content>
                        </Container>
                    </View>
                    <View style={totalItem}>
                        <View style={totalLabel}>
                            <Text style={[fontSize20, colorBlue, fontWeight]}>Tổng số bánh hủy :</Text>
                        </View>
                        <View style={totalText}>
                            <Text style={[fontSize20, fontWeight, marginLeft20]}>105</Text>
                        </View>
                    </View>

                    {/* So Luong Ban */}
                    <View style={{ margin: 10, height: 350 }}>
                        <Container>
                            <Header style={headerItem}>
                                <Text style={headerItemText}>Số lượng bán hàng</Text>
                            </Header>
                            <Content style={contentItem}>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Hambuger : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Pita : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Sandwich : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Hot-dot : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={itemDetail}>
                                    <View style={itemDetailLable}>
                                        <Text>Miến gà : </Text>
                                    </View>
                                    <View style={itemDetailText}>
                                        <Item>
                                            <Input keyboardType="numeric" />
                                        </Item>
                                    </View>
                                </View>
                            </Content>
                        </Container>
                    </View>
                    <View style={{margin:10,paddingBottom:10}}>
                        {/* Tong so luong */}
                        <View style={totalItem}>
                            <View style={totalLabel}>
                                <Text style={[fontSize20, colorBlue, fontWeight]}>Tổng số bánh bán :</Text>
                            </View>
                            <View style={totalText}>
                                <Text style={[fontSize20, fontWeight, marginLeft20]}> 105</Text>
                            </View>
                        </View>
                        <View style={totalItem}>
                            <View style={totalLabel}>
                                <Text style={[fontSize20, colorBlue, fontWeight]}>Tổng tiền bánh :</Text>
                            </View>
                            <View style={totalText}>
                                <Text style={[fontSize20, fontWeight, marginLeft20]}> 2,500,000đ</Text>
                            </View>
                        </View>
                        <View style={totalItem}>
                            <View style={totalLabel}>
                                <Text style={[fontSize20, colorBlue, fontWeight]}>Tổng tiền gà :</Text>
                            </View>
                            <View style={totalText}>
                                <Text style={[fontSize20, fontWeight, marginLeft20]}> 100,000đ</Text>
                            </View>
                        </View>
                        <View style={[totalItem, marginTop20]}>
                            <View style={totalLabel}>
                                <Text style={[fontSize20, colorBlue, fontWeight]}>Số tiền thực tế :</Text>
                            </View>
                            <View style={totalText}>
                                <Item>
                                    <Input keyboardType="numeric" />
                                </Item>
                            </View>
                        </View>
                        <View style={[totalItem,marginTop10]}>
                            <View style={totalLabel}>
                                <Text style={[fontSize20, colorBlue, fontWeight]}>Tiền thiếu :</Text>
                            </View>
                            <View style={totalText}>
                                <Text style={[fontSize20, fontWeight, marginLeft20]}> 100,000đ</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}