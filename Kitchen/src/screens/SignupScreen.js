import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button,TouchableOpacity } from "react-native";
import axios from "axios";

const RegisterPage = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [usernameErr,setNameErr]  = useState("");
  const [passwordErr,setPasswordErr] = useState("");

    const handleRegistration = async() => {
      if(username.length < 3){
        setNameErr("Name should be at least 3 characters long");
        return;
        }
        if(!email){
          setEmailErr("Email is required");
          return;
        }
        if(!email.includes("@") || !email.includes(".")){
          setEmailErr(`Email must include "@" and a "."`);
          return;
        }
      
        if(!password){
          setPasswordErr("Password is required.");
          return;
          }
    
        if(password.length < 8){
          setPasswordErr("Password should be at least 8 characters long");
          return;
          }
    
        const customerData = {
          username,
          email,
          password,
        };
    
        try{
          const response = await axios.post("http://localhost:5000/api/users/register", customerData)
           console.log(response)
           navigation.navigate("Signin")
        }catch(error){
        console.log(error.message)
        }
      };
    

  return (
    <View style={styles.container}>
       <Image
        source={require('../images/logoo.png')} // Replace with your logo image path
        style={styles.logo}
      />

      <Text style={styles.title}>Signup</Text>
      <View style={styles.formContainer}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <Text>Email Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <Button
          title="Register"
          onPress={handleRegistration}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={styles.loginText}>Already have an account? Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  loginText: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:"brown"
  },
  formContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});

export default RegisterPage;
