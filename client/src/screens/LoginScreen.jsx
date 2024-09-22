import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userType, setUserType] = useState('Rider'); // Default user type is Rider

  // Toggle user type and apply the theme based on the selection
  const toggleUserType = type => {
    setUserType(type);
  };

  const isDriver = userType === 'Driver';

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.titleBox, isDriver && styles.driverTitle]}>
        <View style={styles.titleContainer}>
          <Text style={styles.appName}>RideShare</Text>
          <Text style={styles.companyName}>by Hexaware</Text>
        </View>
      </View>
      <Image source={require('../images/taxi1.jpg')} style={styles.image} />
      <View style={styles.container}>
        {/* Sign in Text */}
        <Text style={styles.signInText}>Sign in to your corporate account</Text>

        {/* Toggle User Type Buttons */}
        <View style={styles.userTypeContainer}>
          <TouchableOpacity
            style={[
              styles.userTypeButton,
              userType === 'Rider' && styles.activeUserTypeButtonRider,
            ]}
            onPress={() => toggleUserType('Rider')}>
            <Text
              style={[
                styles.userTypeText,
                userType === 'Rider' && styles.activeUserTypeText,
              ]}>
              Rider
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.userTypeButton,
              userType === 'Driver' && styles.activeUserTypeButtonDriver,
            ]}
            onPress={() => toggleUserType('Driver')}>
            <Text
              style={[
                styles.userTypeText,
                userType === 'Driver' && styles.activeUserTypeText,
              ]}>
              Driver
            </Text>
          </TouchableOpacity>
        </View>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Employee/Intern ID"
          placeholderTextColor="#a1a1a1"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a1a1a1"
          secureTextEntry
        />

        {/* Forgot Password */}
        <Text style={styles.forgotPassword}>Forgot password?</Text>

        {/* Log In Button */}
        <TouchableOpacity
          style={[styles.loginButton, isDriver && styles.driverLoginButton]}
          onPress={() => navigation.replace(userType)}>
          <Text style={styles.loginButtonText}>
            {isDriver ? 'Driver Login' : 'Rider Login'}
          </Text>
        </TouchableOpacity>

        {/* Sign Up Text */}
        <Text style={styles.signUpText}>
          <Text> New user?</Text>
          <Text style={[styles.signUpLink, isDriver && styles.driverSignUp]}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  titleBox: {
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E45FA',
    paddingHorizontal: 20,
  },
  driverTitle: {
    backgroundColor: '#07125E',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  appName: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 5, // Space between RideShare and by Hexaware
  },
  companyName: {
    color: 'white',
    fontSize: 16,
  },

  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 5,
  },
  signInText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userTypeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userTypeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  activeUserTypeButtonRider: {
    backgroundColor: '#2E45FA',
  },
  activeUserTypeButtonDriver: {
    backgroundColor: '#07125E',
  },
  userTypeText: {
    color: '#a1a1a1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeUserTypeText: {
    color: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#eceff5',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: 'black',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#a1a1a1',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#2E45FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverLoginButton: {
    backgroundColor: '#07125E', // Light blue login button for driver
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 16,
    color: '#333',
  },
  signUpLink: {
    color: '#2E45FA',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  driverSignUp: {
    color: '#07125E',
  },
});

export default LoginScreen;
