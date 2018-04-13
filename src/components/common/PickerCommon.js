import React, { Component } from 'react';
import { Picker, Item } from 'native-base';

import CommonStyle from '../../../public/css/common/CommonStyle';

export default class PickerCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: this.props.data,
            selectedValue: this.props.value
        }
    }

    _onValueChange = (itemValue, itemIndex) => {
        this.setState({selectedValue: itemValue});
        this.props.onValueChange(itemValue, itemIndex);
    }

    render() {
        var {fontSize18} = CommonStyle;
        return (
            <Picker
                mode="dropdown"
                headerBackButtonText={this.props.headerText}
                selectedValue={this.state.selectedValue}
                onValueChange={(itemValue, itemIndex) => this._onValueChange(itemValue, itemIndex)}
            >
                {
                    this.state.listData.map((item, index) => {
                        return <Item label={item.label} value={item.value} key={index} style={fontSize18}/>
                    })
                }
            </Picker>
        )
    }
}