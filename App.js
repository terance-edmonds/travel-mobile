import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

export default class App extends React.Component{
  state = {
    isFontLoaded : false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'RobotoBold' : require('./app/fonts/Roboto-Bold.ttf'),
      'RobotoRegular' : require('./app/fonts/Roboto-Regular.ttf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppLoading/>)
    );
  }
}