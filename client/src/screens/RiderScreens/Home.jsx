// Dashboard.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Dashboard</Text>
        <Icon name="cog" size={25} color="black" />
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Search Ride')}>
        <Icon name="search" size={25} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Search or post a ride</Text>
          <Text style={styles.subText}>
            Set up a new ride or join an existing one
          </Text>
        </View>
        <Icon name="chevron-right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('UpcomingRides')}>
        <Icon name="calendar" size={25} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>My upcoming rides</Text>
          <Text style={styles.subText}>
            See all your upcoming rides in one place
          </Text>
        </View>
        <Icon name="chevron-right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={25} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Profile</Text>
          <Text style={styles.subText}>View or edit your profile</Text>
        </View>
        <Icon name="chevron-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    paddingHorizontal: 4
  },
  mainText: {
    fontSize: 16,
    fontWeight: '500',
    color: "black"
  },
  subText: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default Home;
