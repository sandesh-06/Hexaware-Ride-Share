import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const PostRide = () => {
  const addresses = {
    home: 'D Block, 2nd street, Thiruvanmiyur, chennai - 72',
    office: 'Hexaware semmancheri, chennai - 90',
  };
  const [destination, setDestination] = useState(addresses.home);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [locationType, setLocationType] = useState('home'); // default to 'home'

  const handleLocationChange = itemValue => {
    setLocationType(itemValue);
    setDestination(addresses[itemValue]);
  };

  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../images/searchride.jpg')}
        style={styles.image}
      />
      <Text style={styles.header}>Travelling to?</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={locationType}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={itemValue => handleLocationChange(itemValue)}
        >
          <Picker.Item label="Home" value="home" />
          <Picker.Item label="Office" value="office" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setDestination}
        value={destination}
        placeholder="Where to?"
        placeholderTextColor="#a1a1a1"
      />
      <Text style={styles.header}>Enter date and time</Text>
      <DatePicker
        date={date}
        onDateChange={setDate}
        minimumDate={today}
        maximumDate={threeDaysLater}
        style={{marginBottom: 20}}
        theme='light'
      />
      <Text style={styles.header}>How many seats are available?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAvailableSeats}
        value={availableSeats}
        placeholder="Available seats"
        keyboardType="numeric"
        placeholderTextColor="#a1a1a1"
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Post Ride</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#07125E',
    width: '100%',
    marginBottom: 15,
    color: 'white',
  },
  picker: {
    height: 60,
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
  },
  pickerItem: {
    color: 'white', 
    fontSize: 16,
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#07125E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostRide;
