import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For star icons

const Feedback = ({route}) => {
  const [rating, setRating] = useState(0); // State to manage selected rating
  const [comment, setComment] = useState(''); // State to manage optional comment
  const {trip} = route.params; // Receive trip data through params
  const navigation = useNavigation()
  // Function to render stars based on the selected rating
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Icon
            name={i <= rating ? 'star' : 'star-o'}
            size={32}
            color={i <= rating ? '#FFD700' : '#CCCCCC'}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Trip Summary */}
      <View style={styles.tripSummary}>
        <Text style={styles.sectionTitle}>Trip Summary</Text>

        {/* Ride Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Ride Info</Text>
          <Text style={styles.infoText}>
            Pickup: {trip.rideInfo.pickUpLocation}
          </Text>
          <Text style={styles.infoText}>
            Drop-off: {trip.rideInfo.dropLocation}
          </Text>
          <Text style={styles.infoText}>Fare: ₹{trip.rideInfo.price}</Text>
        </View>

        {/* Driver Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Driver Info</Text>
          <View style={{width: 60, height: 60, }}>
            <Image
              source={trip.driverInfo.image}
              style={{width: '100%', height: '100%', borderRadius: 50}}
            />
          </View>
          <View>
            <Text style={styles.infoText}>
              Driver: {trip.driverInfo.driverName}
            </Text>
            <Text style={[styles.infoText]}>Car No: {trip.carInfo.carNo}</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rate your experience</Text>
      </View>

      {/* Rating */}
      <View style={styles.ratingSection}>
        <Text style={styles.ratingNumber}>{rating ? rating : 0}</Text>
        <View style={styles.stars}>{renderStars()}</View>
        <Text style={styles.reviewCount}>1,234 reviews</Text>
      </View>

      {/* Optional Comment */}
      <Text style={styles.commentLabel}>Optional comment</Text>
      <TextInput
        style={styles.commentInput}
        placeholder="Tell us more"
        placeholderTextColor="#a1a1a1"
        value={comment}
        onChangeText={text => setComment(text)}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          rating !== 0 && styles.enabledSubmitButton,
        ]}
        disabled={rating === 0}
        onPress={()=>navigation.navigate('HomeScreen')}
    >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tripSummary: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  infoSection: {
    marginVertical: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewCount: {
    fontSize: 16,
    color: '#555',
  },
  commentLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  commentInput: {
    width: '100%',
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enabledSubmitButton: {
    backgroundColor: '#2E45FA',
  },
});

export default Feedback;
