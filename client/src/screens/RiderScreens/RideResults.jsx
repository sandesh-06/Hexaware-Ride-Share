import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
const RideResults = () => {
  const navigation = useNavigation();
  // Placeholder data for rides
  const rideOptions = [
    {
      id: '1',
      carInfo: {
        carName: 'Toyota Innova',
        carNo: 'TN01BH3017',
        totalSeats: '6',
        vehicleImage: require('../../images/sixseater.png'),
      },
      driverInfo: {
        driverName: 'Aravind JK',
        ratings: '4.8',
        totalRides: 78,
        image: require('../../images/person1.jpg'),
      },
      rideInfo: {
        availableSeat: '3',
        pickUpLocation: 'Sathyabama College',
        price: '79.16',
        dropOff: '12:40pm',
        eta: '5',
        dropLocation: 'Hexaware Chennai'
      },
    },
    {
      id: '2',
      carInfo: {
        carName: 'Swift Dezire',
        carNo: 'TN09BL9812',
        totalSeats: '4',
        vehicleImage: require('../../images/fourseater.png'),
      },
      driverInfo: {
        driverName: 'Ramakrishna',
        ratings: '4.2',
        totalRides: 107,
        image: require('../../images/person2.jpg'),
      },
      rideInfo: {
        availableSeat: '1',
        pickUpLocation: 'Sathyabama College',
        price: '82.07',
        dropOff: '12:50pm',
        eta: '12',
        dropLocation: 'Hexaware Chennai'
      },
    },
    {
      id: '3',
      carInfo: {
        carName: 'JAWA Yezdi',
        carNo: 'TN06AK0982',
        totalSeats: '1',
        vehicleImage: require('../../images/bike.jpg'),
      },
      driverInfo: {
        driverName: 'Sandesh S',
        ratings: '3.8',
        totalRides: 48,
        image: require('../../images/person3.jpg'),
      },
      rideInfo: {
        availableSeat: '1',
        pickUpLocation: 'Sathyabama College',
        price: '28.16',
        dropOff: '12:37pm',
        eta: '3',
        dropLocation: 'Hexaware Chennai'
      },
    },
    {
      id: '4',
      carInfo: {
        carName: 'RE Hunter 350',
        carNo: 'TN11VJ7865',
        totalSeats: '1',
        vehicleImage: require('../../images/bike.jpg'),
      },
      driverInfo: {
        driverName: 'Naveen C',
        ratings: '4.2',
        totalRides: 92,
        image: require('../../images/person4.jpg'),
      },
      rideInfo: {
        availableSeat: '1',
        pickUpLocation: 'Sathyabama College',
        price: '32.07',
        dropOff: '12:39pm',
        eta: '5',
        dropLocation: 'Hexaware Chennai'
      },
    },
  ];

  // Render item for each ride
  const renderRideItem = ({item}) => (
    <TouchableOpacity
      style={styles.rideOption}
      onPress={() => navigation.navigate('Ride Details', {ride: item})}
      // onPress={() => navigation.navigate('Maps')}
      delayPressIn={80}
    >
      <Image
        source={item.carInfo.vehicleImage}
        style={styles.rideImage}
        resizeMode="contain"
      />
      <View style={styles.rideInfo}>
        <Text style={styles.rideType}>{item.carInfo.carName}</Text>
        <Text style={styles.rideDetail}>
          Name: {item.driverInfo.driverName}
        </Text>
        <Text style={styles.rideDetail}>
          Seats Availble: {item.rideInfo.availableSeat}/
          {item.carInfo.totalSeats}
        </Text>
        <Text style={styles.rideDetail}>
          Drop off at: {item.rideInfo.dropOff}
        </Text>
      </View>
      <Text style={styles.ridePrice}>₹{item.rideInfo.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../images/selectride.jpg')}
          style={styles.rideSelectImage}
        />
      </View>
      <Text style={styles.title}>Available Rides</Text>
      <FlatList
        data={rideOptions}
        renderItem={renderRideItem}
        keyExtractor={item => item.id}
        style={{paddingHorizontal: 20, marginBottom: 2}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  imageContainer: {
    height: '30%',
    marginVertical: 10,
    alignItems: 'center',
  },
  rideSelectImage: {
    width: '80%',
    height: '100%',
  },
  rideOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  rideImage: {
    width: 70,
    height: '100%',
    borderRadius: 10,
  },
  rideInfo: {
    flex: 1,
    marginLeft: 15,
  },
  rideType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  rideDetail: {
    fontSize: 14,
    color: '#6c757d',
  },
  ridePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  requestButton: {
    backgroundColor: '#2E45FA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  requestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RideResults;
