import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button,TouchableOpacity } from "react-native";
import axios from "axios";
import CheckBox from 'expo-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterPage = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [usernameErr,setNameErr]  = useState("");
  const [passwordErr,setPasswordErr] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
        source={require('../images/logoo.png')} 
        style={styles.image2}
      />

      <Text style={styles.title}>Signup</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <View style={styles.line}></View>

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.line}></View>

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <View style={styles.line}></View>

        <View style={styles.rememberMeContainer}>
          
          <Text>Remember Me</Text>
          <CheckBox
          style={styles.checkbox}
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
          />
        </View>

    <TouchableOpacity style={styles.fbbutton}>
    <FontAwesomeIcon icon={{name: 'fa-facebook'}} style={styles.facebookIcon} />
      <Text style={styles.fbbuttonText}>Facebook</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
        style={styles.button}
          onPress={handleRegistration}
        >
          <Text style={styles.buttonText}>Signup</Text>

          </TouchableOpacity>
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
    backgroundColor: "#FFF",
    alignItems: "center",
    backgroundColor: "white",
    height:"100%"
  },
  loginText: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
  },
  label:{
    color: "#202020",
    fontSize: 13,
    fontWeight: 400,
    alignSelf: "flex-start",
    marginTop: 22,
    marginLeft: 4,
  },
  title: {
    color: "#BD8853",
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: -0.21,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 25,
    width: 115,
  },
  checkbox:{
    alignContent:"flex-end",
    marginLeft:220,
  },
  line: {
    backgroundColor: "#E7E8EA",
    alignSelf: "flex-start",
    marginLeft: 3,
    width: 335,
    height: 1,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 150,
    shadowColor: "#BD8853",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3, 
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center"
  },
  input: {
    backgroundColor:"transparent",
    color:"brown",
    padding:10
  },
  formContainer: {
    width: "80%",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:30,
    alignContent:"space-between",
    marginBottom:30,
  },
  fbbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#1877f2', // Blue border color
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fbbuttonText: {
    fontSize: 16,
    color: '#1877f2', // Blue text color
    marginLeft: 10,
    fontWeight:"bold" // Spacing between icon and text
  },
  // image1: {
  //   alignSelf: "flex-start",
  //   position: "relative",
  //   display: "flex",
  //   width: 45,
  //   flexShrink: 0,
  //   flexDirection: "column",
  //   marginTop: 21,
  //   marginLeft:20,
  //   aspectRatio: 1,
  // },
  image2: {
    alignSelf: "flex-start",
    position: "relative",
    display: "flex",
    marginTop: 16,
    width: 120,
    height:120,
    flexShrink: 0,
    flexDirection: "column",
    marginLeft: 135,
    aspectRatio: 1,
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    border: 1,
    backgroundColor: "#FFF",
    alignSelf: "flex-start",
    display: "flex",
    marginTop: 14,
    width: 800,
    maxWidth: 800,
    paddingTop: 14,
    paddingRight: 20,
    paddingBottom: 14,
    paddingLeft: 20,
    flexDirection: "column",
  },
  view2: {
    alignItems: "flex-start",
    alignSelf: "center",
    display: "flex",
    width: "100%",
    gap: 4,
  },
  image3: {
    position: "relative",
    display: "flex",
    width: 22,
    flexShrink: 0,
    flexDirection: "column",
    aspectRatio: 1,
  },
  view3: {
    color: "#4267B2",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontSize: 17,
    fontWeight: 600,
    letterSpacing: -0.408,
    alignSelf: "stretch",
  },
});

export default RegisterPage;
