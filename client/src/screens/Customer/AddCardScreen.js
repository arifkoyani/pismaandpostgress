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
      if (!cardOwner || !cardNumber || !expiryDate || !cvv) {
        // Handle missing card information
        alert('Please fill in all card details.');
        return;
      }
  
      if (!isCardNumberValid(cardNumber)) {
        alert('Invalid card number format. Please use a 16-digit card number with optional spaces.');
        return;
      }
  
      if (!isExpiryDateValid(expiryDate)) {
        alert('Invalid expiry date format. Please use MM/YY format.');
        return;
      }
  
      if (!isCVVValid(cvv)) {
        alert('Invalid CVV format. Please enter a 3-digit CVV.');
        return;
      }

    } else if (paymentMethod === 'cash') {
      navigation.navigate('PlaceOrder');
    }
  };

  const isCardNumberValid = (cardNumber) => {
    // Validate card number format (16 digits with optional spaces)
    const cardNumberRegex = /^(\d{4}[-\s]?){3}\d{4}$/;
    return cardNumberRegex.test(cardNumber);
  };
  
  const isExpiryDateValid = (expiryDate) => {
    // Validate expiry date format (MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expiryDateRegex.test(expiryDate);
  };
  
  const isCVVValid = (cvv) => {
    // Validate CVV format (3 digits)
    const cvvRegex = /^\d{3}$/;
    return cvvRegex.test(cvv);
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

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Make Payment</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "white", // White background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center", // Center button within its row
    backgroundColor: '#FFF',
    boxShadow: "0px 4px 4px 0px #BD8853",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});

export default AddCardScreen;
