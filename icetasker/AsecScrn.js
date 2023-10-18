import {useState, useEffect} from 'react';
import {
	View,
	Button,
	Text,
	StyleSheet,
} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-native-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../icetasker/App';
import App from '../icetasker/App';

const screens = {
    Home: {
        screen: App
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
