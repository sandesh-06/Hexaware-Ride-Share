// Dashboard.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const rideData = [
    {
      id: 1,
      time: '5:30 PM',
      date: 'Today',
      bookedSeats: '2',
      totalSeats: '4',
      destination: 'Home',
      from: 'Office',
    },
    {
      id: 2,
      time: '8:00 AM',
      date: 'Tomorrow',
      bookedSeats: '4',
      totalSeats: '4',
      destination: 'Work',
      from: 'Home',
    },
    {
      id: 3,
      time: '5:30 PM',
      date: 'Tomorrow',
      bookedSeats: '1',
      totalSeats: '4',
      destination: 'Home',
      from: 'Office',
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Icon name="settings" size={25} color="black" />
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Search Ride')}>
        <View style={styles.iconWrapper}>
          <Icon name="search" size={25} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Search a ride</Text>
          <Text style={styles.subText}>
            Going to home/office? Get an instant ride
          </Text>
        </View>
        <Icon name="chevron-right" size={25} color="#2E45FA" />
      </TouchableOpacity>
      {/* Upcoming Rides */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scheduled rides</Text>
        {rideData.map(ride => (
          <TouchableOpacity
            key={ride.id}
            style={styles.rideItem}
            onPress={() => navigation.navigate('Trip Details', {trip: ride})}>
            <View style={styles.rideInfo}>
              <View style={styles.iconWrapper}>
                <Icon name="schedule" size={24} color="#6b6b6b" />
              </View>

              <View style={styles.rideDetails}>
                <Text style={styles.rideTime}>
                  {ride.date} {ride.time}
                </Text>
                <Text style={styles.rideSeats}>
                  {ride.bookedSeats}/{ride.totalSeats} booked
                </Text>
                <Text style={styles.rideDestination}>
                  {ride.from} -- {ride.destination}
                </Text>
              </View>
            </View>

            <Icon name="arrow-forward" size={24} color="#2E45FA" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  section: {
    marginVertical: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  iconWrapper: {
    backgroundColor: '#CBD0E5',
    padding: 12,
    borderRadius: 10,
  },
  rideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
  },
  rideInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rideDetails: {
    marginLeft: 10,
  },
  rideTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rideSeats: {
    color: '#6b6b6b',
  },
  rideDestination: {
    color: '#6b6b6b',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 10,
    elevation: 3,
  },
  iconWrapper: {
    backgroundColor: '#CBD0E5',
    padding: 12,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    paddingHorizontal: 4,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default Home;
