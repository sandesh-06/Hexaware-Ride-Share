import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons

const RiderDetails = ({route}) => {
    const {rider} = route.params
  return (
    <View style={styles.container}>
      {/* Rider Information */}
      <View style={styles.riderInfoContainer}>
        {/* Rider Image */}
        <Image
          source={rider.riderInfo.image}
          style={styles.riderImage}
        />
        <Text style={styles.riderName}>{rider.riderInfo.name}</Text>
        <Text style={styles.riderPosition}>
         {rider.riderInfo.designation} at Hexaware, Chennai
        </Text>
      </View>

      {/* Pickup Location */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pickup Location</Text>
        <View style={styles.locationRow}>
         <View style={styles.iconWrapper}>
         <Icon name="place" size={24} color="black" style={styles.icon} />
         </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationTitle}>{rider.rideInfo.from}</Text>
            <Text style={styles.locationSubtext}>
              {rider.rideInfo.fromAddress}
            </Text>
          </View>
        </View>
      </View>

      {/* Dropoff Location */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dropoff Location</Text>
        <View style={styles.locationRow}>
        <View style={styles.iconWrapper}>
         <Icon name="place" size={24} color="black" style={styles.icon} />
         </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationTitle}>{rider.rideInfo.to}</Text>
            <Text style={styles.locationSubtext}>
              {rider.rideInfo.toAddress}
            </Text>
          </View>
        </View>
      </View>

      {/* Ride Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ride Details</Text>

        {/* Scheduled Time */}
        <View style={styles.detailRow}>
        <View style={styles.iconWrapper}>
         <Icon name="calendar-today" size={24} color="black" style={styles.icon} />
         </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailTitle}>Scheduled for</Text>
            <Text style={styles.detailSubtext}>{rider.rideInfo.date}</Text>
            <Text style={styles.detailSubtext}>{rider.rideInfo.time}</Text>
          </View>
        </View>
      </View>

      {/* Approve/Reject Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.approveButton}>
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.buttonText}>Reject</Text>
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
  riderInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  riderImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 10,
  },
  riderName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  riderPosition: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#CBD0E5',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  locationSubtext: {
    fontSize: 14,
    color: '#6C757D',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  detailSubtext: {
    fontSize: 14,
    color: '#6C757D',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  approveButton: {
    flex: 1,
    backgroundColor: '#07125E',
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#F44336',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RiderDetails;
