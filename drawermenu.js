import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Menu from './src/components/main/Menu';
import Home from './src/components/home/Home';
import Employees from './src/components/employee/Employees';

const { height, width } = Dimensions.get('window');

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/menu/user-menu.png')}
            />
        ),
    };

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications11"
                />
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open menu" />
            </View>

        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (

            <Image
                source={require('./images/menu/user-menu.png')}
            />

        ),
    };

    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home11"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = DrawerNavigator(
    {
        Home: {
            screen: Home,
        }
    },
    {
        initialRouteName: 'Home',
        drawerWidth: width * 2 / 3,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />,
        contentOptions: {
            activeTintColor: '#000',
        },
    }
);

MyApp.navigationOptions = {
    title: 'Home Feed',

    header: () => ({
        // Render a button on the right side of the header
        // When pressed switches the screen to edit mode.
        left: (
            <Button
                title={'Drawer'}
            />
        ),
        tintColor: 'rgba(51, 51, 51, 1)'
    }),
};

const App = StackNavigator({
    HomeScreen1: { screen: MyApp },
    Employees: {
        screen: Employees,
    }
});

export default MyApp;