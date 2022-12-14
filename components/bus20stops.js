import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

// bus19Response = new Map();

export default class bus20stops extends Component {

  bus19Response = new Map();
  nationalstop = () => {
    //GET request
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747924/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson[0])        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16150" || responseJson[i].RouteID == "18085" || responseJson[i].RouteID == "18086") {
            console.log(responseJson[i].Arrivals.length)  
            for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
              if(responseJson[i].Arrivals[index]) {
                busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
                busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
                // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
                // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
                // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
                // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
              }
            }
            
          }
          
        }
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

  sciencehillstop = () => {
    //GET request 
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747440/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson[0])        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16150" || responseJson[i].RouteID == "18085" || responseJson[i].RouteID == "18086") {
            console.log(responseJson[i].Arrivals.length)  
            for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
              if(responseJson[i].Arrivals[index]) {
                busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
                busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
                // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
                // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
                // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
                // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
              }
            }
            
          }
          
        }
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

  metrostop = () => {
    //GET request 
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747903/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson[0].RouteID)    
        console.log(responseJson.length)    
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16150" || responseJson[i].RouteID == "18085" || responseJson[i].RouteID == "18086") {
            console.log(responseJson[i].Arrivals.length)  
            for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
              if(responseJson[i].Arrivals[index]) {
                busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
                busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
                // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
                // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
                // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
                // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
              }
            }
            
          }
          
        }
        // busResponse.set("ArriveTime1", responseJson[0].Arrivals[0].ArriveTime);
        // busResponse.set("Time1", responseJson[0].Arrivals[0].Time);
        // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
        // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
        // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
        // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);

        console.log(busResponse);
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

  bookstorestop = () => {
    //GET request 
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747635/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson)        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16150" || responseJson[i].RouteID == "18085" || responseJson[i].RouteID == "18086") {
            console.log(responseJson[i].Arrivals.length)  
            for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
              if(responseJson[i].Arrivals[index]) {
                busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
                busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
                // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
                // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
                // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
                // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
              }
            }
            
          }
          
        }
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Bay and National"
          onPress={() => {
              // bus19Response.clear();
              this.nationalstop();
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
              
            }
          }
        />   
        <Button
          title="Science Hill"
          onPress={() => {
              this.sciencehillstop();
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
            }
          }
        /> 
        <Button
          title="Bookstore"
          onPress={() => {
              this.bookstorestop();
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
            }
          }
        />   
        <Button
          title="Metro Center"
          onPress={() => {
              this.metrostop();
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
            }
          }
        />   
      </View>
    )
}
}