import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons

const RideRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: '1',
      riderInfo: {
        name: 'Aravind JK',
        designation: 'Product Manager',
        image: require('../../images/person1.jpg'),
      },
      rideInfo: {
        time: '1:30 PM',
        from: 'Office',
        to: 'Perambur',
        fromAddress: 'Hexaware semmancheri, chennai - 90',
        toAddress: '3rd Cross, 1st Street, Perambur, Chennai - 29',
        date: 'Today',
      },
    },
    {
      id: '2',
      riderInfo: {
        name: 'Ramakrishna',
        designation: 'Human Resource',
        image: require('../../images/person2.jpg'),
      },
      rideInfo: {
        time: '2:00 PM',
        from: 'Office',
        to: 'OMR',
        fromAddress: 'Hexaware semmancheri, chennai - 90',
        toAddress: 'ABC Nagar, 2nd Street, OMR, Chennai - 90',
        date: 'Tomorrow',
      },
    },
    {
      id: '3',
      riderInfo: {
        name: 'Sandesh S',
        designation: 'Software Developer',
        image: require('../../images/person3.jpg'),
      },
      rideInfo: {
        time: '2:30 PM',
        from: 'Anna Nagar',
        to: 'Office',
        fromAddress: '6th Avenue, Anna Nagar, Chennai - 25',
        toAddress: 'Hexaware semmancheri, chennai - 90',
        date: 'Tomorrow',
      },
    },
    {
      id: '4',
      riderInfo: {
        name: 'Naveen C',
        designation: 'Product Designer',
        image: require('../../images/person4.jpg'),
      },
      rideInfo: {
        time: '2:30 PM',
        from: 'Porur',
        to: 'Office',
        fromAddress: 'XYZ colony, 4th Cross, Porur, Chennai - 25',
        toAddress: 'Hexaware semmancheri, chennai - 90',
        date: 'Today',
      },
    },
  ]);

  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  const handleExpand = id => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleAccept = id => {
    console.log(`Accepted request with ID: ${id}`);
  };

  const handleReject = id => {
    console.log(`Rejected request with ID: ${id}`);
  };

  const renderRequestItem = ({item}) => {
    const isExpanded = selectedId === item.id;
    return (
      <TouchableOpacity
        onPress={() => handleExpand(item.id)}
        style={styles.requestContainer}>
        {/* Rider Image */}
        <Image source={item.riderInfo.image} style={styles.riderImage} />

        {/* Rider Info */}
        <View style={styles.requestInfo}>
          <Text style={styles.riderName}>
            {item.riderInfo.name}, {item.rideInfo.date}
          </Text>
          {isExpanded && (
            <>
              <Text style={styles.timeText}>{item.rideInfo.time}</Text>
              <Text style={styles.addressText}>
                From {item.rideInfo.from} to {item.riderInfo.to}
              </Text>

              {/* Accept/Reject Icons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  onPress={() => handleAccept(item.id)}
                  style={[styles.requestButtons, {backgroundColor: '#07125E'}]}>
                  <Icon name="check" size={15} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleReject(item.id)}
                  style={[styles.requestButtons, {backgroundColor: '#F44336'}]}>
                  <Icon name="times" size={15} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Rider Details', {rider: item})
                  }
                  style={[styles.requestButtons, {backgroundColor: '#CBD0E5'}]}>
                  <Text style={{color: 'black', fontWeight: '500'}}>
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        {/* Arrow Icon */}
        <View style={styles.arrowIcon}>
          <Icon
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#888888"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Ride Requests List */}
      <FlatList
        data={requests}
        renderItem={renderRequestItem}
        keyExtractor={item => item.id}
        extraData={selectedId} // Re-render when selectedId changes
      />

      {/* Approve All Button */}
      <TouchableOpacity style={styles.approveAllButton}>
        <Text style={styles.approveAllText}>Approve all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 2,
  },
  arrowIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  riderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  requestInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  timeText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    fontWeight: '500',
  },
  addressText: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 10,
  },
  requestButtons: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 5,
  },
  approveAllButton: {
    backgroundColor: '#07125E',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  approveAllText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RideRequests;
