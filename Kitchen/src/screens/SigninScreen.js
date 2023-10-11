import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, CheckBox, Button } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";

const SignInPage = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    const data = {
      username: username,
      password: password,
      userType: "customer"
    };
    if(!username){
      setUsernameError("Email is required");
      return;
    }
    if(!password){
      setPassError("Password is required.");
      return;
    }


    try {
      const res = await axios.post("http://localhost:5000/api/users/login", data);
      dispatch(login(res.data));

      await AsyncStorage.setItem("userId", res.data.userId);

      navigation.navigate("CustomerScreen");
    }catch(error){
        if (error.response) {
          if (error.response.status === 401) {
            if (error.response.data.message === "Invalid login credentials") {
              setError( error.response.data.message); 
            } else if (error.response.data.message === "Account send for approval") {
              setError( error.response.data.message);  
            }else if (error.response.data.message === "You are not registered as a customer") {
              setError( error.response.data.message);  
            }
          }
        } else {
          console.error('Error:', error.message);
        }
      };
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logoo.png')} // Replace with your logo image path
        style={styles.logo}
      />

      <Text style={styles.signInText}>Sign In</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <View style={styles.rememberMeContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember Me</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleSignIn}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.registerText}>New to OFF? Register!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  registerText: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
  },
  logo: {
    width: 100,
    height: 100,
  },
  signInText: {
    fontSize: 24,
    color:"brown",
    marginBottom: 20, // Added margin to center-align the "Sign In" text
  },
  formContainer: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: 5,
    color: "red",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 80,
    backgroundColor:"brown"
  }
});

export default SignInPage;
