import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button
          title="Timings"
          onPress={() => this.props.navigation.navigate('Timings')}
        />
      </View>
    )
}
}