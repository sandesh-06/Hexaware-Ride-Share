import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons

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

const DriverHome = () => {
  const navigation = useNavigation();
  const rideRequestsCount = 4;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Icon name="settings" size={25} color="black" />
      </View>

      {/* Post a Ride Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.postRideButton}
          onPress={() => navigation.navigate('Post Ride')}>
          <View style={styles.postRideText}>
            <View style={styles.iconWrapper}>
              <Icon name="arrow-forward" size={24} color="#6b6b6b" />
            </View>
            <View style={styles.postRideDetails}>
              <Text style={styles.postRideMainText}>
                Going to work? Post a ride
              </Text>
              <Text style={styles.postRideSubText}>
                Set your destination and start driving
              </Text>
            </View>
          </View>
          <Icon name="directions-car" size={24} color="#07125E" />
        </TouchableOpacity>
      </View>

      {/* Upcoming Rides */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming rides</Text>
        {rideData.map(ride => (
          <TouchableOpacity key={ride.id} style={styles.rideItem}
            onPress={()=>navigation.navigate("Trip Details", {trip: ride})}
          >
            <View style={styles.rideInfo}>
              <View style={styles.iconWrapper}>
                <Icon name="schedule" size={24} color="#6b6b6b" />
              </View>

              <View style={styles.rideDetails}>
                <Text style={styles.rideTime}>{ride.date}{" "}{ride.time}</Text>
                <Text style={styles.rideSeats}>{ride.bookedSeats}/{ride.totalSeats} booked</Text>
                <Text style={styles.rideDestination}>
                  {ride.from} -- {ride.destination}
                </Text>
              </View>
            </View>

            <Icon name="arrow-forward" size={24} color="#07125E" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Ride Requests Button */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.rideRequestsButton}
          onPress={() => navigation.navigate('Ride Requests')}>
          <View style={styles.rideRequestsContent}>
            <View>
              <Text style={styles.rideRequestsText}>
                Ride Requests: {rideRequestsCount}
              </Text>
              <Text style={styles.rideRequestsDescription}>
                Check out who's waiting to catch a ride with you!
              </Text>
            </View>
            <Icon name="arrow-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  section: {
    marginBottom: 25,
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
  postRideButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 10,
    elevation: 3,
  },
  postRideText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postRideDetails: {
    marginLeft: 10,
  },
  postRideMainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  postRideSubText: {
    color: '#6b6b6b',
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
  rideRequestsButton: {
    backgroundColor: '#07125E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 10,
    elevation: 3,
  },
  rideRequestsContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  rideRequestsText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  rideRequestsDescription: {
    fontSize: 14,
    color: '#D3D3D3',
    marginTop: 5,
  },
});

export default DriverHome;
