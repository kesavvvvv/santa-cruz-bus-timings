import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class bus19timings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>
            {
            "Bus 1\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime1") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time1") + 
        "\nBus 2\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime2") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time2") + 
        "\nBus 3\n" + "Arrival Time: " + this.props.navigation.state.params.bus19Response.get("ArriveTime3") + "\nMinutes: " + this.props.navigation.state.params.bus19Response.get("Time3")
            }
        </Text>

      </View>
    )
}
}