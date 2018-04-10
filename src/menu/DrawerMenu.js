import React, { Component } from 'react';
import { Drawer, Button, Icon } from 'native-base';
import Menu from './Menu';
import Main from '../components/main/Main';

export default class DrawerExample extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
        content={<Menu navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        <Main openDrawer={this.openDrawer.bind(this)} />
      </Drawer>
    );
  }
}