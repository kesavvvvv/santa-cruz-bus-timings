import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
var out = "";
export default class bus19timings extends Component {
  test() {
    
    for (let index = 0; index < this.props.navigation.state.params.bus19Response.size; index++) {
      out +=  "Bus " + (parseInt(index) + 1).toString() + "\n\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime" + (parseInt(index) + 1).toString()) + 
      "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time" + (parseInt(index) + 1).toString())
      
    }
  }
  render() {
    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Next arrival time at Bay and National is</Text>
        </View>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>

        <Text>
            {
            
            
            "Bus 1\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime1") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time1") + 
        "\nBus 2\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime2") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time2") + 
        "\nBus 3\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime3") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time3")
            }
        </Text>

      </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});