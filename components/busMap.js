import React, {Component} from 'react';
import {Button} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default class busMap extends React.Component {
    bus19Response = new Map();
  nationalstop = () => {
    //GET request
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Route/4378/Vehicles', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson[0])        
        busResponse.set("Lat1", responseJson[0].Latitude);
        busResponse.set("Long1", responseJson[0].Longitude);
        // busResponse.set("Lat2", responseJson[1].Latitude);
        // busResponse.set("Long2", responseJson[1].Longitude);

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
render() {
  return (
    <Button
          title="Bus 19"
          onPress={() => {
              // bus19Response.clear();
              this.nationalstop();
              setTimeout(() => {
                 this.props.navigation.navigate('bus19Map', {bus19Response})
              }, 200);
              
            }
          }
        />   
  );
 }
}