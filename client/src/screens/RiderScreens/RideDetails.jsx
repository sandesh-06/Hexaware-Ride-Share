import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Maps} from './index';
import {useNavigation} from '@react-navigation/native';
const RideDetails = ({route}) => {
  const navigation = useNavigation();
  const {ride} = route.params;
  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={{width: '100%', height: '50%'}}>
        <Maps />
      </View>

      {/* Ride details */}
      <View style={{padding: 20}}>
        {/* Ride Info */}
        <View style={styles.rideInfo}>
          <Image
            source={ride.carInfo.vehicleImage}
            style={styles.rideImage}
            resizeMode="contain"
          />
          <View style={styles.rideText}>
            <Text style={styles.rideType}>{ride.carInfo.carName}</Text>
            <Text style={styles.rideReady}>{ride.carInfo.carNo}</Text>
          </View>
        </View>

        {/* Driver Info */}
        <View style={styles.driverInfo}>
          <Image
            source={ride.driverInfo.image}
            style={styles.driverImage}
            resizeMode="contain"
          />
          <View style={styles.driverText}>
            <Text style={styles.driverName}>{ride.driverInfo.driverName}</Text>
            <Text style={styles.driverDetails}>
              {ride.carInfo.carName} · {ride.carInfo.totalSeats} seats
            </Text>
            <Text style={styles.driverRating}>
              {ride.driverInfo.ratings} · {ride.driverInfo.totalRides} rides
            </Text>
          </View>
        </View>

        {/* ETA Info */}
        <View style={styles.etaInfo}>
          <Icon name="clock-o" size={20} color="black" />
          <View style={styles.etaText}>
            <Text style={styles.eta}>ETA: {ride.rideInfo.eta} min</Text>
            <Text style={styles.pickupLocation}>
              Pickup at: {ride.rideInfo.pickUpLocation}
            </Text>
          </View>
        </View>

        {/* Ride Cost */}
        <View style={styles.rideCost}>
          <Text style={styles.costLabel}>Ride cost</Text>
          <Text style={styles.cost}>₹{ride.rideInfo.price}</Text>
        </View>

        {/* Request Ride Button */}
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => navigation.navigate('Trip Details', {trip: ride})}>
          <Text style={styles.requestButtonText}>Request this Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 20,
  },

  rideInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rideImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  rideText: {
    justifyContent: 'center',
  },
  rideType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rideReady: {
    fontSize: 14,
    color: '#888',
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  driverText: {
    justifyContent: 'center',
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  driverDetails: {
    fontSize: 14,
    color: '#888',
  },
  driverRating: {
    fontSize: 14,
    color: '#888',
  },
  etaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  etaText: {
    marginLeft: 10,
  },
  eta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  pickupLocation: {
    fontSize: 14,
    color: '#888',
  },
  rideCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  costLabel: {
    fontSize: 16,
    color: '#888',
  },
  cost: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  requestButton: {
    backgroundColor: '#2E45FA',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  requestButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default RideDetails;
