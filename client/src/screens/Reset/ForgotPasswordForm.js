import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

const ForgotPasswordForm = ({navigation,route}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (text) => {
    console.log(text)
    setEmail(text);
  };

  const handleSubmit = () => {
    // Send API request to the backend server
    axios  
      .post("https://off-api.vercel.app/api/reset", {email})
      .then((response) => {
        setMessage(response.data.message);
        if(response.data.success){
          navigation.navigate('ForgotPasswordConfirmation',{email})
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
       <Image
        source={require('../../images/logoo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TouchableOpacity style={styles.buttonn} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      {message !== "" && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent:"center"
  },
  logo: {
    width: 100,
    height: "141px",
    bottom: "65px",
    left: "120px",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 16,
    textAlign: "center",
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonText: {
    color:"white",
    justifyContent:"center",
    textAlign:"center"
   
    
  },
  buttonn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center", // Center button within its row
    backgroundColor: '#BC8752',
    boxShadow: "0px 4px 4px 0px #BD8853",
  },
});

export default ForgotPasswordForm;
