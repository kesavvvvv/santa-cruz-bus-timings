import { Component } from 'react';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import busTimings from './components/busTimings';
import Homescreen from './components/HomeScreen';
import bus19timings from './components/bus19timings';

const AppNavigator = createStackNavigator(  
  {  
      Homies: Homescreen,  
      Timings: busTimings,
      bus19timings: bus19timings
  },  
  {  
      initialRouteName: "Homies"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  

export default class App extends Component {  
  render() {  
      return <AppContainer />;  
  }  
}  

