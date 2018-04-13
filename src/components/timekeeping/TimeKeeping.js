import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, StyleSheet, Image, FlatList } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    Container, Header, Body, Content, Footer, Text, Button, Title, Left, Right, ListItem, Picker, Item,
    Label, Input
} from 'native-base';
import Modal from 'react-native-modalbox';

//Common
import Utils from '../../common/Utils';
import MainHeader from '../main/MainHeader';
import ModalStyle from '../../../public/css/common/ModalStyle';
import TimeKeepingStyle from '../../../public/css/timekeeping/TimeKeepingStyle';

//Image
import closeIcon from '../../../images/modal/close-icon.png';
import addIcon from '../../../images/add-icon.png';

const listData = [
    {
        id: 1,
        name: 'Phạm phú chinh',
        hours: '5 giờ',
        amount: '150,000đ'
    },
    {
        id: 2,
        name: 'Phạm Thị Đang Thùy',
        hours: '3 giờ',
        amount: '250,000đ'
    },
    {
        id: 3,
        name: 'Phạm Thị Ánh Chiến',
        hours: '4 giờ',
        amount: '350,000đ'
    }
];

export default class TimeKeeping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            isDateTimePickerVisible: false,
            isOpen: false,
            selectedEmployee: ''
        }
        this.setDate = this.setDate.bind(this);
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ chosenDate: date });
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    _renderItem = ({ item }) => {
        var { resultItem, itemLeft, itemBody, itemRight } = TimeKeepingStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text>{item.name}</Text>
                </View>
                <View style={itemBody}>
                    <Text>{item.hours}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.amount}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        let { bodyContent, HeaderItem, itemLable, itemText, lableTitle,
            listTitle, textTitleList, listAddImage ,
            resultTotal, totalLeft, totalBody, totalRight} = TimeKeepingStyle;
        let { modalBody, modalContent, modalFooter, modalButton,
            modalItem, modalItemLable, modalItemText, fontWeight, fontSize18 } = ModalStyle;
        let BContent = <Button onPress={() => this.setState({ isOpen: false })}><Text>X</Text></Button>;
        return (
            <Container>
                <MainHeader title="Chấm công" showBack={true} backName="ListTimeKeeping" navigation={this.props.navigation}/>
                <Content style={bodyContent}>
                    <TouchableOpacity style={HeaderItem} onPress={this._showDateTimePicker}>
                        <View style={itemLable}>
                            <Text style={lableTitle}>Ngày chấm công : </Text>
                        </View>
                        <View style={itemText}>
                            <Text style={lableTitle}>{Utils.formatDate(this.state.chosenDate)}       {Utils.dayOfWeekDate(this.state.chosenDate)}</Text>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={listTitle}>
                        <Left>
                            <Text style={textTitleList}>Danh sách nhân viên</Text>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => { this.setState({ isOpen: true }) }}>
                                <Image source={addIcon} style={listAddImage} />
                            </Button>
                        </Right>
                    </View>
                    <FlatList
                        data={listData}
                        renderItem={this._renderItem}
                    />
                    {/* List Total */}
                    <ListItem style={resultTotal}>
                        <View style={totalLeft}>
                            <Text style={fontWeight}>Tổng cộng</Text>
                        </View>
                        <View style={totalBody}>
                            <Text style={fontWeight}>15 giờ</Text>
                        </View>
                        <View style={totalRight}>
                            <Text style={fontWeight}>700,000đ</Text>
                        </View>
                    </ListItem>
                </Content>

                {/* Dialog modal */}
                <Modal style={modalBody} isOpen={this.state.isOpen}
                    onClosed={() => this.setState({ isOpen: false })}
                    position={"center"} backdropContent={BContent}>
                    <Header>
                        <Body>
                            <Title>Thêm nhân viên</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.setState({ isOpen: false })}>
                                <Image source={closeIcon} />
                            </Button>
                        </Right>
                    </Header>
                    <Content style={modalContent}>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Nhân viên : </Text>
                            </View>
                            <View style={modalItemText}>
                                <Picker
                                    mode="dropdown"
                                    headerBackButtonText="Chọn tuần"
                                    selectedValue={this.state.selectedEmployee}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedEmployee: itemValue })}
                                >
                                    {listData.map((item, index) => (
                                        <Item label={item.name} value={item.id} key={index} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                        <View style={modalItem}>
                            <View style={modalItemLable}>
                                <Text style={[fontWeight, fontSize18]}>Thời gian : </Text>
                            </View>
                            <View style={modalItemText}>
                                <Item inlineLabel>
                                    <Label>3 giờ đầu : </Label>
                                    <Input value="3" />
                                </Item>
                                <Item inlineLabel>
                                    <Label>2 giờ sau : </Label>
                                    <Input value="2" />
                                </Item>
                            </View>
                        </View>
                    </Content>
                    <Footer style={modalFooter}>
                        <Button danger style={modalButton} onPress={() => this.setState({ isOpen: false })}>
                            <Text> Đóng </Text>
                        </Button>
                        <Button primary style={modalButton}>
                            <Text> Thêm </Text>
                        </Button>
                    </Footer>

                </Modal>
            </Container>
        )
    }
}