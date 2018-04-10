import React from 'react';
import {StackNavigator} from 'react-navigation';
import Employee from '../components/employee/Employee';

const StackRouterEmployee = StackNavigator(
    {
        Employee: {
            screen: Employee
        }
    }
);

export default StackRouterEmployee