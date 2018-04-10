import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container, Header, Content, Item, Input, Icon, Button, Text,
    List, ListItem, Thumbnail, Left, Body, Right
} from 'native-base';

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

export default class _ContentEmployees extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listEmployees: ds.cloneWithRows(listNhanVien)
        }
    }

    _goToDetail = () =>{
        const {navigate } = this.props.navigation;
        navigate('Employee');
    }

    renderRowListEmployees(rowData) {
        var {navigation} = this.props;
        return (
            <ListItem>
                <Thumbnail square size={80} source={rowData.image} />
                <Body>
                    <Text>{rowData.name}</Text>
                    <Text note>{rowData.position}</Text>
                </Body>
                <Right>
                    <Button transparent info onPress={() => this._goToDetail()}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
    render(){
        return(
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon active name='search' />
                        <Input placeholder='Tìm kiếm theo tên' />
                    </Item>
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