import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

const SearchRide = () => {
  const navigation = useNavigation();
  const addresses = {
    home: 'D Block, 2nd street, Thiruvanmiyur, chennai - 72',
    office: 'Hexaware semmancheri, chennai - 90',
  };
  const [destination, setDestination] = useState(addresses.home);
  const [locationType, setLocationType] = useState('home');
  const [date, setDate] = useState(new Date());
  const [isForLater, setIsForLater] = useState(false);

  const handleNowPress = () => {
    setDate(new Date());
    setIsForLater(false);
  };

  const handleLaterPress = () => {
    setIsForLater(true);
  };

  const handleLocationChange = itemValue => {
    setLocationType(itemValue);
    setDestination(addresses[itemValue]);
  };

  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);

  return (
    <ScrollView style={styles.outerContainer}>
      <Image
        source={require('../../images/searchride.jpg')}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Where are you going?</Text>

        {/* Home or Office selection */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={locationType}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={itemValue => handleLocationChange(itemValue)}>
            <Picker.Item label="Home" value="home" />
            <Picker.Item label="Office" value="office" />
          </Picker>
        </View>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          onChangeText={setDestination}
          value={destination}
          placeholder="Where to?"
          placeholderTextColor="#a1a1a1"
        />

        {/* Buttons for now and for later */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.sideButton,
              !isForLater ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={handleNowPress}>
            <Text style={styles.buttonText}>For Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sideButton,
              isForLater ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={handleLaterPress}>
            <Text style={styles.buttonText}>For Later</Text>
          </TouchableOpacity>
        </View>

        {/* DatePicker for "For Later" option */}
        {isForLater && (
           <DatePicker
            date={date}
            onDateChange={setDate}
            mode="datetime"
            minimumDate={today}
            maximumDate={threeDaysLater}
            style={styles.datePicker}
            theme='light'
          />
        )}

        {/* Search button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ride Results')} // Pass selected date and location
        >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
    height: '100%',
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
  pickerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#2E45FA', // Set background color to match the picker
  },
  picker: {
    height: 60,
    width: '100%',
    color: 'white',
  },
  pickerItem: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#eceff5',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sideButton: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#CBD0E5',
  },
  inactiveButton: {
    backgroundColor: '#a1a1a1', // Greyed out
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
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
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },
  datePicker: {
    marginVertical: 20,
    color: 'black'
  },
});

export default SearchRide;
