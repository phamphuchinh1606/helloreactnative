import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ListView } from 'react-native';
import EmployeesStyle from '../public/css/EmployeesStyle';


const listNhanVien = [
    {
        id: 1,
        name: 'Pham Phu Ch',
        position: 'Nhân viên',
        image: require('../images/chinh.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../images/thuy.png')
    }
];

export default class Employees extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listEmployees: ds.cloneWithRows(listNhanVien)
        }
    }

    renderRowListEmployees(rowData) {
        return (
            <View style={EmployeesStyle.rowData}>
                <Image source={rowData.image} style={EmployeesStyle.imageContent} />
                <View style={EmployeesStyle.inforContent}>
                    <View>
                        <Text style={EmployeesStyle.inforNameContent}>{rowData.name}</Text>
                        <Text>{rowData.position}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../images/next-icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={EmployeesStyle.body}>
                <View style={EmployeesStyle.header}>
                    <TouchableOpacity style={EmployeesStyle.back}>
                        <Image source={require('../images/back-icon.png')} />
                        <Text style={EmployeesStyle.textHeader}>Back</Text>
                    </TouchableOpacity>
                    <Text style={EmployeesStyle.textHeader}>Danh sách nhân viên</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/menu-icon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={EmployeesStyle.containt}>
                    <View style={EmployeesStyle.employeesHeader}>
                        <TextInput placeholder="Tìm kiếm" style={EmployeesStyle.employeesHeaderText} />
                    </View>
                    <View style={EmployeesStyle.employeesContent}>
                        <ListView
                            dataSource={this.state.listEmployees}
                            renderRow={(rowData) => this.renderRowListEmployees(rowData)}
                        />
                    </View>
                </View>
            </View>
        )
    }
}