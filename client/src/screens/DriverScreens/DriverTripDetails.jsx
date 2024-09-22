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

export default function DriverTripDetails({route}) {
  const {trip} = route.params;
  const navigation = useNavigation();

  // Sample data for riders
  const riders = [
    {
      name: 'Aravind JK',
      designation: 'Product Manager',
      image: require('../../images/person1.jpg'),
    },
    {
      name: 'Ramakrishna',
      designation: 'Human Resource',
      image: require('../../images/person2.jpg'),
    },
    {
      name: 'Sandesh S',
      designation: 'Software Developer',
      image: require('../../images/person3.jpg'),
    },
    {
      name: 'Naveen C',
      designation: 'Product Designer',
      image: require('../../images/person4.jpg'),
    },
  ];
  const displayedRiders = riders.slice(0, parseInt(trip.bookedSeats));
  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={{width: '100%', height: '40%'}}>
        <Maps />
      </View>

      {/* Trip Title */}
      <View style={styles.title}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: '600'}}>
          Scheduled Ride for {trip.date}
        </Text>
      </View>

      {/* Trip Details */}
      <ScrollView style={{paddingHorizontal: 20}}>
        {/* Trip Info */}
        <View style={styles.tripInfo}>
          <View style={styles.pickupContainer}>
            <Text style={styles.pickupText}>Trip starts at {trip.time}</Text>
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
                  <Text style={styles.time}>From</Text>
                  <Text style={styles.address}>{trip.from}</Text>
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
                  <Text style={styles.time}>To</Text>
                  <Text style={styles.address}>{trip.destination}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Riders Info */}
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          Riders
        </Text>
        <View style={styles.ridersList}>
          {displayedRiders.map((rider, index) => (
            <View key={index} style={styles.riderInfo}>
              <Image
                source={rider.image}
                style={styles.riderImage}
                resizeMode="contain"
              />
              <View style={styles.riderText}>
                <Text style={styles.riderName}>{rider.name}</Text>
                <Text style={styles.riderDesignation}>{rider.designation}</Text>
              </View>
            </View>
          ))}
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

        {/* Cancel Trip Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: '#FF6B6B'}]}>
            <Text style={styles.actionButtonText}>Cancel Trip</Text>
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
    description: 'We can help you get in touch with your riders',
    image: require('../../images/HelpSection/findlostitem.png'),
  },
  {
    title: 'Report Safety Issue',
    description: 'Let us know if you have a safety-related issue',
    image: require('../../images/HelpSection/reportsafety.png'),
  },
  {
    title: 'Provide App Feedback',
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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tripInfo: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
  },
  pickupText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#888',
  },
  rideDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  rideRowContainer: {
    position: 'relative',
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
  ridersList: {
    marginVertical: 20,
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  riderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  riderText: {
    justifyContent: 'center',
  },
  riderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  riderDesignation: {
    fontSize: 14,
    color: '#777',
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
    width: '100%',
    marginBottom: 7,
  },
  actionButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
