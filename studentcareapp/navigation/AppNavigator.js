import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import  Subjects  from '../pages/Subjects';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='Subjects' component={Subjects}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}