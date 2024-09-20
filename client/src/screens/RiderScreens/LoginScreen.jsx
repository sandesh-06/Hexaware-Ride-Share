import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Hexaware</Text>
        <Icon name="chevron-down" size={25} color="white" />
      </View>
      <Image
        source={require('../../images/taxi.png')} // Dummy image URL
        style={styles.image}
      />
      <View style={styles.container}>
        {/* Header with Image */}
        {/* Sign in Text */}
        <Text style={styles.signInText}>Sign in to your corporate account</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
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
          style={styles.loginButton}
          onPress={() => navigation.navigate('Rider')}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        {/* Sign Up Text */}
        <Text style={styles.signUpText}>
          <Text> New user?</Text>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#2E45FA',
    paddingHorizontal: 20,
  },
  outerContainer: {
    height: "100%"
  },
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  signInText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#eceff5',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
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
});

export default LoginScreen;
