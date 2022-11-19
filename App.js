import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import bus19 from './components/bus19';
import Homescreen from './components/HomeScreen';

const AppNavigator = createStackNavigator(  
  {  
      Welcome: Homescreen,  
      19: bus19  
  },  
  {  
      initialRouteName: "Welcome"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  

export default class App extends Component {  
  render() {  
      return <AppContainer />;  
  }  
}  

