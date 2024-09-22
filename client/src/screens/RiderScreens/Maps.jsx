import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

export default function Maps() {
  const initialLocation = {
    latitude: 12.872905,
    longitude: 80.226512,
  };
  const [currLocation, setCurrLocation] = useState(initialLocation);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currLocation.latitude,
          longitude: currLocation.longitude,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.0041,
        }}>
        <Marker
          coordinate={{
            latitude: currLocation.latitude,
            longitude: currLocation.longitude,
            latitudeDelta: 0.0002,
            longitudeDelta: 0.0041,
          }}
          title='You'
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure container takes up the whole screen
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Ensures the map covers the entire container
  },
});
