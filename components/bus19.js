import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class bus19 extends Component {

  getDataUsingGet = (): Map => {
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

        // alert(JSON.stringify(responseJson));
        console.log(responseJson[0].Arrivals[0].Time)
        
        busResponse.set("ArriveTime1", responseJson[0].Arrivals[0].ArriveTime);
        busResponse.set("Time1", responseJson[0].Arrivals[0].Time);
        busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
        busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
        busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
        busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
        
        alert("Bus 1\n" + "Arrival Time: " + busResponse.get("ArriveTime1") + "\nMinutes: " + busResponse.get("Time1") + "\nBus 2\n" + "Arrival Time: " + busResponse.get("ArriveTime2") + "\nMinutes: " + busResponse.get("Time2") + "\nBus 3\n" + "Arrival Time: " + busResponse.get("ArriveTime3") + "\nMinutes: " + busResponse.get("Time3"));
        console.log(busResponse.ArriveTime);
        //return busResponse;
        // console.log(responseJson[0].Arrivals[0].ArriveTime);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
    // alert("hi")
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Go to 19"
          onPress={() => {
              this.getDataUsingGet();
              
            }
          }
        />
        
      </View>
    )
  }
}