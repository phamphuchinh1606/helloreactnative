import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Footer, FooterTab, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

import * as ImagesCommon from '../../common/ImagesCommon';
import FooterStyle from '../../../public/css/main/FooterStyle';

export default class MainFooter extends Component {
    _onPressWeek = ()=>{
        var {onPressWeek} = this.props;
        onPressWeek();
    }

    _onPressMonth = ()=>{
        var {onPressWeek} = this.props;
        onPressWeek();
    }

    _onPressDay = ()=>{
        var {onPressWeek} = this.props;
        onPressWeek();
    }

    render() {
        var {footerIcon,footerText} = FooterStyle;
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={()=>this._onPressWeek()} active>
                        <Image source={ImagesCommon.WeekIcon} style={footerIcon}/>
                        <Text style={footerText}>Tuần</Text>
                    </Button>
                    <Button vertical onPress={()=>this._onPressMonth()}>
                        <Image source={ImagesCommon.MonthIcon} style={footerIcon}/>
                        <Text style={footerText}>Tháng</Text>
                    </Button>
                    <Button vertical onPress={()=>this._onPressDay()}>
                        <Image source={ImagesCommon.DayIcon} style={footerIcon}/>
                        <Text style={footerText}>Ngày</Text>
                    </Button>
                    {/* <Button onPress={Actions.Home}>
                        <Icon name="apps" />
                    </Button>
                    <Button onPress={Actions.Employees}>
                        <Icon name="camera" />
                    </Button>
                    <Button active>
                        <Icon active name="navigate" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button> */}
                </FooterTab>
            </Footer>
        )
    }
}