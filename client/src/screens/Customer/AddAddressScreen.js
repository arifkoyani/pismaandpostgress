// AddAddressScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddAddressScreen = ({ navigation }) => {
  const [address, setAddress] = useState('');

  const handleSaveAddress = () => {
    // Implement logic to save the address (e.g., send it to the server)
    // You can add your API calls or state management here
    // After saving, you may want to navigate back to the cart or another screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Delivery Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your delivery address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveAddress}
      >
        <Text style={styles.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#09605e',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddAddressScreen;
