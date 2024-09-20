import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SearchRide = () => {
  return (
    <View style={styles.outerContainer}>
      {/* Placeholder image */}
      <Image
        source={{uri: 'https://via.placeholder.com/500'}}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Where are you going?</Text>

        {/* Input fields */}
        <TextInput placeholder="Enter destination" style={styles.input} />

        <TextInput placeholder="Select date" style={styles.input} />

        <TextInput placeholder="Select time" style={styles.input} />

        {/* Search button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#FFF',
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
});

export default SearchRide;
