import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class bus19Map extends Component {
  
render() {
  var lat1 = this.props.navigation.state.params.bus19Response.get("Lat1")
  var long1 = this.props.navigation.state.params.bus19Response.get("Long1")
  var dir1 = this.props.navigation.state.params.bus19Response.get("Dir1")
  var rot1 = 0
  if(dir1 == "E"){
    rot1 = 0
  }
  if(dir1 == "SE"){
    rot1 = 45
  }
  if(dir1 == "S"){
    rot1 = 90
  }
  if(dir1 == "SW"){
    rot1 = 135
  }
  if(dir1 == "W"){
    rot1 = 180
  }
  if(dir1 == "NW"){
    rot1 = 225
  }
  if(dir1 == "N"){
    rot1 = 270
  }
  if(dir1 == "NE"){
    rot1 = 315
  }
  if(this.props.navigation.state.params.bus19Response.get("Lat2")) {
    var lat2 = this.props.navigation.state.params.bus19Response.get("Lat2")
  var long2 = this.props.navigation.state.params.bus19Response.get("Long2")
  var dir2 = this.props.navigation.state.params.bus19Response.get("Dir2")
  var rot2 = 0
  if(dir2 == "E"){
    rot2 = 0
  }
  if(dir2 == "SE"){
    rot2 = 45
  }
  if(dir2 == "S"){
    rot2 = 90
  }
  if(dir2 == "SW"){
    rot2 = 135
  }
  if(dir2 == "W"){
    rot2 = 180
  }
  if(dir2 == "NW"){
    rot2 = 225
  }
  if(dir2 == "N"){
    rot2 = 270
  }
  if(dir2 == "NE"){
    rot2 = 315
  }
  }
  else {
    var lat2 = 0
  var long2 = 0
  var dir2 = 0
  var rot2 = 0
  }
   
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
          latitude: this.props.navigation.state.params.bus19Response.get("Lat1"),
          longitude: this.props.navigation.state.params.bus19Response.get("Long1"),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
      >
      <Marker.Animated
        rotation={rot1}
        coordinate={{latitude: lat1, longitude: long1}}
        icon={require('../assets/e_1.gif')}
      />
      <Marker.Animated
        rotation={rot2}
        coordinate={{latitude: lat2, longitude: long2}}
        icon={require('../assets/e_1.gif')}
      />
      </MapView>
    
  );
 }
}