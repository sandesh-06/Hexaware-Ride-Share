import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
const SearchRide = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.outerContainer}>
      {/* Placeholder image */}
      <Image
        source={require('../../images/searchride.jpg')}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Where are you going?</Text>

        {/* Input fields */}
        <TextInput
          placeholder="Search destination"
          placeholderTextColor="#a1a1a1"
          style={styles.input}
        />

        <TextInput
          placeholder="Select date"
          placeholderTextColor="#a1a1a1"
          style={styles.input}
        />

        <TextInput
          placeholder="Select time"
          placeholderTextColor="#a1a1a1"
          style={styles.input}
        />

        {/* Search button */}
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Ride Results")}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Schedule Pickup</Text>
          <Icon name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer:{
    backgroundColor: 'white',
    height: "100%"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#eceff5',
    color: 'black'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2E45FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleButton: {
    backgroundColor: '#2E45FA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scheduleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchRide;
