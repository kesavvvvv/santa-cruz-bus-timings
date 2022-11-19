import React, { Component, useEffect } from 'react';
import { Button, View, Text } from 'react-native';

import { useState } from 'react';
// const [usersData,setUsersData]=useState([])

class bus19 extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state={
  //       busResponse1: new Map()
  //   }

  // }

  
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

        // alert(JSON.stringify(responseJson));
        console.log(responseJson[0].Arrivals[0].Time)
        
        busResponse.set("ArriveTime1", responseJson[0].Arrivals[0].ArriveTime);
        busResponse.set("Time1", responseJson[0].Arrivals[0].Time);
        busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
        busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
        busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
        busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
        // setUsersData(busResponse);
        // this.setState({busResponse1: this.busResponse})
        // alert(this.busResponse1.get("ArriveTime1"));
        // return busResponse;
        alert("Bus 1\n" + "Arrival Time: " + busResponse.get("ArriveTime1") + "\nMinutes: " + busResponse.get("Time1") + 
        "\nBus 2\n" + "Arrival Time: " + busResponse.get("ArriveTime2") + "\nMinutes: " + busResponse.get("Time2") + 
        "\nBus 3\n" + "Arrival Time: " + busResponse.get("ArriveTime3") + "\nMinutes: " + busResponse.get("Time3"));
        // console.log(busResponse.ArriveTime);
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
  
  // // var busResponse = Map()
  // useEffect(() => {
  //   getDataUsingGet()
  // },[]);
  
  // componentDidMount = () => {
  //   this.getDataUsingGet();
  // }

  render(){
    // this.getDataUsingGet();
    
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>busResponse</Text> */}
      {/* <Text>{this.state.busResponse.get("ArriveTime1")}</Text> */}
      {/* <Text>{this.getDataUsingGet}</Text> */}
      {/* <Text>getDataUsingGet()</Text> */}
        <Button
          title="Go to 19"
          onPress={() => {
            this.getDataUsingGet();
              // this.getDataUsingGet
              // alert("Hi")
            }
          }
        />
        
      </View>
    )
        }
}

export default bus19;
/*
export default class bus19 extends Component {

  
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

        // alert(JSON.stringify(responseJson));
        console.log(responseJson[0].Arrivals[0].Time)
        
        busResponse.set("ArriveTime1", responseJson[0].Arrivals[0].ArriveTime);
        busResponse.set("Time1", responseJson[0].Arrivals[0].Time);
        busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
        busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
        busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
        busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
        // setUsersData(busResponse);

        return busResponse;
        alert("Bus 1\n" + "Arrival Time: " + busResponse.get("ArriveTime1") + "\nMinutes: " + busResponse.get("Time1") + 
        "\nBus 2\n" + "Arrival Time: " + busResponse.get("ArriveTime2") + "\nMinutes: " + busResponse.get("Time2") + 
        "\nBus 3\n" + "Arrival Time: " + busResponse.get("ArriveTime3") + "\nMinutes: " + busResponse.get("Time3"));
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
  useEffect
  useEffect(() => {
    busResponse = this.getDataUsingGet();
  },[]);

  render() {
    
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>busResponse</Text>

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
*/