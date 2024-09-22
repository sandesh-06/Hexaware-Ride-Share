import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Maps} from './index';
import {useNavigation} from '@react-navigation/native';

export default function TripDetails({route}) {
  const {trip} = route.params || {};
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesFormatted}${ampm}`;
  };
  const currTime = getCurrentTime();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={{width: '100%', height: '40%'}}>
        <Maps />
      </View>
      <View style={styles.title}>
        <Text
          style={{color: 'black', fontSize: 25, fontWeight: 'condensedBold'}}>
          Your ride in on the way
        </Text>
      </View>
      {/* Trip Details */}
      <ScrollView style={{paddingHorizontal: 20}}>
        {/* Trip Info */}
        <View style={styles.tripInfo}>
          <View style={styles.pickupContainer}>
            <Text style={styles.pickupText}>
              Pickup at {trip.rideInfo.pickUpLocation}
            </Text>
            <Text style={styles.priceText}>₹{trip.rideInfo.price}</Text>
          </View>

          <View style={styles.rideDetails}>
            <View style={styles.rideRowContainer}>
              <View style={styles.rideRow}>
                <Icon
                  style={styles.icon}
                  name="directions-car"
                  size={28}
                  color="#000"
                />
                <View>
                  <Text style={styles.time}>{currTime}</Text>
                  <Text style={styles.address}>
                    {trip.rideInfo.pickUpLocation}
                  </Text>
                </View>
              </View>

              {/* Line between the car icons */}
              <View style={styles.line} />

              <View style={styles.rideRow}>
                <Icon
                  style={styles.icon}
                  name="directions-car"
                  size={28}
                  color="#000"
                />
                <View>
                  <Text style={styles.time}>{trip.rideInfo.dropOff}</Text>
                  <Text style={styles.address}>
                    {trip.rideInfo.dropLocation}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Driver Info */}
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          Driver
        </Text>
        <View style={styles.driverInfo}>
          <Image
            source={trip.driverInfo.image}
            style={styles.driverImage}
            resizeMode="contain"
          />
          <View style={styles.driverText}>
            <Text style={styles.driverName}>
              {trip.driverInfo.driverName} ({trip.carInfo.carName})
            </Text>
            <Text style={styles.driverDetails}>
              {trip.carInfo.carNo} · {trip.carInfo.totalSeats} seats
            </Text>
            <Text style={styles.driverRating}>
              {trip.driverInfo.ratings} · {trip.driverInfo.totalRides} rides
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: '#2E45FA'}]}
            onPress={() => navigation.navigate('Payment Summary', { totalFare: trip.rideInfo.price, trip: trip })}
        >
            <Text style={styles.actionButtonText}>Call Driver</Text>
            <Icon style={styles.icon} name="phone" size={28} color="white" />
          </TouchableOpacity>
        </View>
        {/* Help Section */}
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Help</Text>
          <View style={styles.helpGrid}>
            {helpItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.helpCard}>
                <Image source={item.image} style={styles.helpImage} />
                <Text style={styles.helpCardTitle}>{item.title}</Text>
                <Text style={styles.helpCardDesc}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: '#FF6B6B'}]}>
            <Text style={styles.actionButtonText}>Cancel Ride</Text>
            <Icon style={styles.icon} name="cancel" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const helpItems = [
  {
    title: 'Find Lost Item',
    description: 'We can help you get in touch with your driver',
    image: require('../../images/HelpSection/findlostitem.png'),
  },
  {
    title: 'Report Safety Issue',
    description: 'Let us know if you have a safety-related issue',
    image: require('../../images/HelpSection/reportsafety.png'),
  },
  {
    title: 'Proivde App Feedback',
    description: 'Your thoughts about this initiative by Hexaware',
    image: require('../../images/HelpSection/appfeedback.png'),
  },
  {
    title: 'Get Trip Help',
    description: 'Need help for something else? Find it here',
    image: require('../../images/HelpSection/gethelp.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tripInfo: {
    backgroundColor: 'white',
    // padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  pickupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pickupText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#888',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  rideDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  rideRowContainer: {
    position: 'relative',
    // marginBottom: 5,
  },
  rideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  time: {
    fontSize: 15,
    color: '#555',
    marginBottom: 1,
  },
  address: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  line: {
    position: 'absolute',
    left: 13,
    top: 31,
    bottom: 46,
    width: 2,
    backgroundColor: '#777',
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
  buttonContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 7,
  },
  actionButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  helpSection: {
    marginBottom: 20,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  helpGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  helpCard: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#888',
  },
  helpImage: {
    width: '90%',
    height: 90,
    marginBottom: 10,
  },
  helpCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
    color: 'black',
  },
  helpCardDesc: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});
