import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Welcome to the Santa Cruz Metro Bus Tracker</Text>
        </View>
        {/* <View style={{ flex: 2, backgroundColor: "darkorange" }} /> */}
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'  }} >
        <Button
          title="Bus Timings"
          onPress={() => this.props.navigation.navigate('Timings')}
        />
        <Button
          title="Bus Location"
          onPress={() => this.props.navigation.navigate('busMap')}
        />
        </View>
      </View>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //    
      //   <Button
      //     title="Timings"
      //     onPress={() => this.props.navigation.navigate('Timings')}
      //   />
      //   <Button
      //     title="Map"
      //     onPress={() => this.props.navigation.navigate('busMap')}
      //   />
      //   </View>
      
    )
}


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});