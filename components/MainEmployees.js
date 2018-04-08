import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Employees from './Employees';

export default class MainEmployees extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'listEmployee'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'listEmployee'}
                    title="Danh sách"
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'listEmployee' })}>
                    {
                        <Employees/>
                    }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'newEmployee'}
                    title="Tạo mới"
                    onPress={() => this.setState({ selectedTab: 'newEmployee' })}>
                    {<Employees/>}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}