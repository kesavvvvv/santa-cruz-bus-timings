import React, { Component } from 'react';
import { Button, View } from 'react-native';

class busTimings extends Component {
  
  render(){
    
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Bus 19"
          onPress={() => {
              this.props.navigation.navigate('bus19stops')
            }
          }
        />      
      </View>
      
    )
  }
}

export default busTimings;

