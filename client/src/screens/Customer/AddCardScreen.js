import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const AddCardScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardOwner, setCardOwner] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'card') {
      // Implement card payment logic here
      // Ensure that cardOwner, cardNumber, expiryDate, and cvv have valid values
    } else if (paymentMethod === 'cash') {
      // Implement cash on delivery logic here
      // You can navigate to a confirmation screen for cash on delivery
      navigation.navigate('CashOnDeliveryConfirmation');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.radioButtons}>
        <View style={styles.radioButton}>
          <RadioButton
            value="card"
            status={paymentMethod === 'card' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentMethod('card')}
          />
          <Text>Card</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="cash"
            status={paymentMethod === 'cash' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentMethod('cash')}
          />
          <Text>Cash on Delivery</Text>
        </View>
      </View>

      {paymentMethod === 'card' && (
        <View>
          <Text style={styles.label}>Card Owner</Text>
          <TextInput
            style={styles.input}
            value={cardOwner}
            onChangeText={(text) => setCardOwner(text)}
          />

          <Text style={styles.label}>Card Number (XXXX XXXX XXXX XXXX)</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Expiry Date (MM/YYYY)</Text>
              <TextInput
                style={styles.input}
                value={expiryDate}
                onChangeText={(text) => setExpiryDate(text)}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>CVV (XXX)</Text>
              <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={(text) => setCVV(text)}
              />
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
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
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
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

export default AddCardScreen;
