import React, {Component} from 'react';
import {FlatList} from 'react-native';

export default class FlatListCommon extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData : this.props.data
        }
    }
    
    _renderItem = ({ item }) => {
        var { resultItem, itemLeft, itemBody, itemRight } = TimeKeepingStyle;
        return (
            <ListItem style={resultItem}>
                <View style={itemLeft}>
                    <Text style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>{item.name}</Text>
                </View>
                <View style={itemBody}>
                    <Text>{item.hours}</Text>
                </View>
                <View style={itemRight}>
                    <Text>{item.amount}`sdfs{}`</Text>
                </View>
            </ListItem>
        )
    }

    render(){
        return(
            <FlatList
                data={this.state.listData}
                renderItem={this._renderItem}
            />
        )
    }
}