import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
export default class bus19Map extends Component {
  
render() {
  var lat = this.props.navigation.state.params.bus19Response.get("Lat1")
  var long = this.props.navigation.state.params.bus19Response.get("Long1")
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
        <Marker
        coordinate={{latitude: lat, longitude: long}}
    />
      </MapView>
    
  );
 }
}