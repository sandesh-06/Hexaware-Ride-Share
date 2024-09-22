import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons

const PaymentSummary = ({route}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const {trip, totalFare} = route.params;
  const finalFare = parseFloat(totalFare);
  const handleSelect = method => {
    setSelectedMethod(method);
  };
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Fare details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fare details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Base fare</Text>
          <Text style={styles.value}>
            ₹{(finalFare * (70.5 / 100)).toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>
            ₹{(finalFare * (4.7 / 100)).toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Platform fee</Text>
          <Text style={styles.value}>
            ₹{(finalFare * (2 / 100)).toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Insurance</Text>
          <Text style={styles.value}>
            ₹{(finalFare * (4.8 / 100)).toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>GST</Text>
          <Text style={styles.value}>
            ₹{(finalFare * (18 / 100)).toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Payment method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment method</Text>

        <TouchableOpacity
          style={[
            styles.paymentRow,
            selectedMethod === 'card' && styles.selectedRow,
          ]}
          onPress={() => handleSelect('card')}>
          <Text style={styles.label}>Visa ending in 4242</Text>
          <Icon name="credit-card" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentRow,
            selectedMethod === 'upi' && styles.selectedRow,
          ]}
          onPress={() => handleSelect('upi')}>
          <Text style={styles.label}>Gpay/PhonePay/PayTM</Text>
          <Icon name="qr-code" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Total */}
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Your Split</Text>
        <View style={styles.totalRow}>
          <Text style={styles.totalValue}>₹{totalFare}</Text>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.confirmButton,
          (selectedMethod === 'card' || selectedMethod === 'upi') &&
            styles.enabledConfirmButton,
        ]}
        disabled={!(selectedMethod === 'card' || selectedMethod === 'upi')}
        onPress={()=>navigation.navigate('Feedback', {trip: trip})}
        >
        <Text style={styles.confirmButtonText}>Confirm and Proceed</Text>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  selectedRow: {
    backgroundColor: '#CBD0E5',
    color: 'white',
  },
  label: {
    fontSize: 18,
    color: '#111',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'black',
  },
  confirmButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enabledConfirmButton: {
    backgroundColor: '#2E45FA',
  },
});

export default PaymentSummary;
