import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container, Header, Content, Item, Input, Icon, Button, Text,
    List, ListItem, Thumbnail, Left, Body, Right
} from 'native-base';
import EmployeesStyle from '../../../public/css/EmployeesStyle';

//Image
import nextIcon from '../../../images/next-icon.png';

const listNhanVien = [
    {
        id: 1,
        name: 'Pham Phu Ch',
        position: 'Nhân viên',
        image: require('../../../images/chinh.png')
    },
    {
        id: 2,
        name: 'pham dang thuy',
        position: 'Trưởng nhóm',
        image: require('../../../images/thuy.png')
    }
];

export default class Employees extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listEmployees: ds.cloneWithRows(listNhanVien)
        }
    }

    renderRowListEmployees(rowData) {
        return (
            <ListItem>
                <Thumbnail square size={80} source={rowData.image} />
                <Body>
                    <Text>{rowData.name}</Text>
                    <Text note>{rowData.position}</Text>
                </Body>
                <Right>
                    <Button transparent info>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>

            // <View style={EmployeesStyle.rowData}>
            //     <Image source={rowData.image} style={EmployeesStyle.imageContent} />
            //     <View style={EmployeesStyle.inforContent}>
            //         <View>
            //             <Text style={EmployeesStyle.inforNameContent}>{rowData.name}</Text>
            //             <Text>{rowData.position}</Text>
            //         </View>
            //         <TouchableOpacity>
            //             <Image source={nextIcon} />
            //         </TouchableOpacity>
            //     </View>
            // </View>
        );
    }

    render() {
        return (
            //    <View style={EmployeesStyle.body}>
            //         <View style={EmployeesStyle.containt}>
            //             <View style={EmployeesStyle.employeesHeader}>
            //                 <TextInput placeholder="Tìm kiếm" style={EmployeesStyle.employeesHeaderText} />
            //             </View>
            //             <View style={EmployeesStyle.employeesContent}>
            //                 <ListView
            //                     dataSource={this.state.listEmployees}
            //                     renderRow={(rowData) => this.renderRowListEmployees(rowData)}
            //                 />
            //             </View>
            //         </View>
            //     </View>
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <List>
                        <ListView
                            dataSource={this.state.listEmployees}
                            renderRow={(rowData) => this.renderRowListEmployees(rowData)}
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}