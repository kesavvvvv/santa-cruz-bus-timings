import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

var busno = 0;
var busno1 = 0;
class busTimings extends Component {
  
  render(){
    
    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Select bus number to see next arrival time</Text>
        </View>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Bus 19"
          onPress={() => {
              busno = 19;
              this.props.navigation.navigate('bus19stops', {busno})
            }
          }
        />  
        <Button
          title="Bus 20"
          onPress={() => {
              busno = 20;
              this.props.navigation.navigate('bus20stops', {busno})
            }
          }
        />      
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

export default busTimings;

