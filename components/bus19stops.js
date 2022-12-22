import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

// bus19Response = new Map();

export default class bus19stops extends Component {

  bus19Response = new Map();
  nationalstop = (busno) => {
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
        console.log(busno)

        // console.log(responseJson[0])        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16149" && parseInt(busno) == 19) {
            console.log("inside 19")
            console.log(responseJson[i].Arrivals.length)  
            for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
              if(responseJson[i].Arrivals[index]) {
                busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
                busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
                // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
                // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
                // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
                // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
                console.log(busResponse)
              }
            }
            
          }

            if(responseJson[i].RouteID == "16150"  && parseInt(busno) == 20) {
              console.log("inside 20")
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
        console.log(this.bus19Response)
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

  sciencehillstop = (busno) => {
    //GET request 
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747884/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(parseInt(busno))
        console.log(responseJson)        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16149" && parseInt(busno) == 19) {
            console.log("inside 19")
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

          //   if(responseJson[i].RouteID == "16150" && parseInt(busno) == 20) {
          //     console.log("inside 20")
          //     console.log(responseJson[i].Arrivals.length)  
          //     for (let index = 0; index < responseJson[i].Arrivals.length; index++) {
          //       if(responseJson[i].Arrivals[index]) {
          //         busResponse.set("ArriveTime" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].ArriveTime);
          //         busResponse.set("Time" + (parseInt(index) + 1).toString(), responseJson[i].Arrivals[index].Time);
          //         // busResponse.set("ArriveTime2", responseJson[0].Arrivals[1].ArriveTime);
          //         // busResponse.set("Time2", responseJson[0].Arrivals[1].Time);
          //         // busResponse.set("ArriveTime3", responseJson[0].Arrivals[2].ArriveTime);
          //         // busResponse.set("Time3", responseJson[0].Arrivals[2].Time);
          //       }
          //     }
              
            
          // }
        }
        console.log(busResponse)
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

  metrostop = (busno) => {
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
          if(responseJson[i].RouteID == "16149") {
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

  bookstorestop = (busno) => {
    //GET request 
    var busResponse = new Map();
    
    fetch('https://cruzmetro.com/Stop/4747886/Arrivals?customerID=169', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success

        console.log(responseJson)        
        for (let i= 0; i< responseJson.length; i++) {
          if(responseJson[i].RouteID == "16149") {
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
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Select the bus stop you are at</Text>
        </View>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Bay and National"
          onPress={() => {
              // bus19Response.clear();
              this.nationalstop(this.props.navigation.state.params.busno);
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
              
            }
          }
        />   
        <Button
          title="Science Hill"
          onPress={() => {
              this.sciencehillstop(this.props.navigation.state.params.busno);
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
            }
          }
        /> 
        <Button
          title="Bookstore"
          onPress={() => {
              this.bookstorestop(this.props.navigation.state.params.busno);
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
            }
          }
        />   
        <Button
          title="Metro Center"
          onPress={() => {
              this.metrostop(this.props.navigation.state.params.busno);
              setTimeout(() => {
                this.props.navigation.navigate('bus19timings', {bus19Response})
              }, 200);
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