import React, { Component } from 'react';
import { Button, View } from 'react-native';

bus19Response = new Map();
class busTimings extends Component {
  
  getDataUsingGet = () => {
    //GET request
    var busResponse = new Map();
    fetch('https://cruzmetro.com/Stop/4747236/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson[0])        
        busResponse.set("ArriveTime1", responseJson[0].Arrivals[0].ArriveTime);
        busResponse.set("Time1", responseJson[0].Arrivals[0].Time);
        busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
        busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
        busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
        busResponse.set("Time3", responseJson[0].Arrivals[2].Time);

        bus19Response = busResponse;
        
        // alert("Bus 1\n" + "Arrival Time: " + busResponse.get("ArriveTime1") + "\nMinutes: " + busResponse.get("Time1") + 
        // "\nBus 2\n" + "Arrival Time: " + busResponse.get("ArriveTime2") + "\nMinutes: " + busResponse.get("Time2") + 
        // "\nBus 3\n" + "Arrival Time: " + busResponse.get("ArriveTime3") + "\nMinutes: " + busResponse.get("Time3"));
        
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  
  render(){
    
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Bus 19"
          onPress={() => {
              this.getDataUsingGet();
              this.props.navigation.navigate('bus19timings', {bus19Response})
            }
          }
        />      
      </View>
    )
  }
}

export default busTimings;

