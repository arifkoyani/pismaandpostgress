// import * as React from "react";
// import { View, StyleSheet, Image, Text } from "react-native";

// export default function MyComponent() {
//   return (
//     <View style={styles.view1}>
//       <View style={styles.view2}>
//         <View style={styles.view3}>
//           <Image
//             source={{
//               uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5916f075-6a09-4156-be40-dbd40c00ca9a?",
//             }}
//             style={styles.image1}
//           />
//           <Image
//             source={{
//               uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/91000461-a657-43f3-9f9b-ab1fb8ad1d94?",
//             }}
//             style={styles.image2}
//           />
//         </View>
//         <View style={styles.view4}>
//           <Text>Sign In</Text>
//         </View>
//         <View style={styles.view5}>
//           <Text>Username</Text>
//         </View>
//         <View style={styles.view6}>
//           <View style={styles.view7}>
//             <Text>Esther Howard</Text>
//           </View>
//           <Image
//             source={{
//               uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3ce8875-55e8-44d8-90b7-e4726e441dcc?",
//             }}
//             style={styles.image3}
//           />
//         </View>
//         <View style={styles.view8} />
//         <View style={styles.view9}>
//           <Text>Password</Text>
//         </View>
//         <View style={styles.view10}>
//           <View style={styles.view11}>
//             <Text>HJ@#9783kja</Text>
//           </View>
//           <View style={styles.view12}>
//             <Text>Strong</Text>
//           </View>
//         </View>
//         <View style={styles.view13} />
//         <View style={styles.view14}>
//           <Text>Forgot password?</Text>
//         </View>
//         <View style={styles.view15}>
//           <View style={styles.view16}>
//             <Text>Remember me</Text>
//           </View>
//           <Image
//             source={{
//               uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/71ed22e2-b022-4341-991d-e20badae17ed?",
//             }}
//             style={styles.image4}
//           />
//         </View>
//       </View>
//       <View style={styles.view17}>
//         <View style={styles.view18}>
//           <Text>
//             <Text style={styles.text}>
//               By connecting your account, confirm that you agree with our
//             </Text>
//             <Text style={styles.boldText}> Term and Condition</Text>
//           </Text>
//         </View>
//         <Image
//           source={{
//             uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/53e7fc6e-ea3f-48cf-aaf3-fd5ea445ba0f?",
//           }}
//           style={styles.image5}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   view1: {
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: 375,
//     paddingRight: 6,
//     paddingLeft: 20,
//     flexDirection: "column",
//   },
//   text: {
//     fontFamily: 'Inter',
//     fontWeight: '400',
//     color: 'rgba(189, 136, 83, 1)',
//   },
//   boldText: {
//     fontFamily: 'Inter',
//     fontWeight: '500',
//     color: 'rgba(0, 0, 0, 1)',
//   },
//   view2: {
//     alignSelf: "stretch",
//     display: "flex",
//     marginTop: 45,
//     flexDirection: "column",
//     width: 100,
//   },
//   view3: {
//     alignSelf: "start",
//     display: "flex",
//     width: 241,
//     maxWidth: 100,
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   image1: {
//     alignSelf: "start",
//     position: "relative",
//     display: "flex",
//     width: 45,
//     flexShrink: 0,
//     flexDirection: "column",
//     aspectRatio: 1,
//   },
//   image2: {
//     alignSelf: "start",
//     position: "relative",
//     display: "flex",
//     marginTop: 17,
//     width: 141,
//     flexShrink: 0,
//     flexDirection: "column",
//     aspectRatio: 1,
//   },
//   view4: {
//     color: "#BD8853",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 28,
//     fontWeight: 600,
//     letterSpacing: "-0.21px",
//     alignSelf: "center",
//     marginTop: 20,
//     marginLeft: "-17px",
//     width: 115,
//   },
//   view5: {
//     color: "#202020",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 13,
//     fontWeight: 400,
//     alignSelf: "start",
//     marginTop: 26,
//     marginLeft: 3,
//     textWrap: "nowrap",
//   },
//   view6: {
//     alignSelf: "start",
//     display: "flex",
//     marginTop: 16,
//     marginLeft: 3,
//     width: 335,
//     maxWidth: 100,
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   view7: {
//     color: "#BD8853",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 15,
//     fontWeight: 500,
//     alignSelf: "center",
//     marginTop: "auto",
//     marginBottom: "auto",
//     width: 115,
//   },
//   image3: {
//     position: "relative",
//     display: "flex",
//     width: 20,
//     flexShrink: 0,
//     flexDirection: "column",
//     aspectRatio: 1,
//   },
//   view8: {
//     backgroundColor: "#E7E8EA",
//     alignSelf: "start",
//     marginTop: 12,
//     marginLeft: 3,
//     width: 335,
//     height: 1,
//   },
//   view9: {
//     color: "#202020",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 13,
//     fontWeight: 400,
//     alignSelf: "start",
//     marginTop: 22,
//     marginLeft: 3,
//     textWrap: "nowrap",
//   },
//   view10: {
//     alignSelf: "start",
//     display: "flex",
//     marginTop: 19,
//     marginLeft: 3,
//     width: 333,
//     maxWidth: 100,
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   view11: {
//     color: "#BD8853",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 15,
//     fontWeight: 500,
//     alignSelf: "stretch",
//     width: 109,
//   },
//   view12: {
//     color: "#34C559",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 11,
//     fontWeight: 400,
//     alignSelf: "center",
//     marginTop: "auto",
//     marginBottom: "auto",
//     textWrap: "nowrap",
//   },
//   view13: {
//     backgroundColor: "#E7E8EA",
//     alignSelf: "start",
//     marginTop: 14,
//     marginLeft: 3,
//     width: 335,
//     height: 1,
//   },
//   view14: {
//     color: "#A71408",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 15,
//     fontWeight: 400,
//     alignSelf: "end",
//     marginTop: 32,
//     marginRight: 13,
//     textWrap: "nowrap",
//   },
//   view15: {
//     alignSelf: "stretch",
//     display: "flex",
//     marginTop: 33,
//     marginLeft: 3,
//     width: 100,
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   view16: {
//     color: "#1D1E20",
//     fontFamily: "Manrope, sans-serif",
//     fontSize: 13,
//     fontWeight: 500,
//     alignSelf: "center",
//     marginTop: "auto",
//     marginBottom: "auto",
//   },
//   image4: {
//     position: "relative",
//     display: "flex",
//     width: 41,
//     flexShrink: 0,
//     flexDirection: "column",
//     aspectRatio: 1.03,
//   },
//   view17: {
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 120,
//     marginBottom: 53,
//     width: 313,
//     maxWidth: 100,
//     flexDirection: "column",
//   },
//   view18: {
//     color: "#000",
//     textAlign: "center",
//     fontFamily: "Inter, sans-serif",
//     fontSize: 13,
//     fontWeight: 500,
//     alignSelf: "stretch",
//     width: 100,
//   },
//   image5: {
//     borderRadius: 10,
//     boxShadow: 0,
//     alignSelf: "center",
//     position: "relative",
//     display: "flex",
//     marginTop: 32,
//     width: 193,
//     flexShrink: 0,
//     flexDirection: "column",
//     aspectRatio: 4.83,
//   },
// });

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
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5916f075-6a09-4156-be40-dbd40c00ca9a?",
            }}
            style={styles.image1}
          />
      <Image
        source={require('../images/logoo.png')} // Replace with your logo image path
        style={styles.image2}
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
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>


        <View style={styles.rememberMeContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember Me</Text>
        </View>

        <View style={styles.termView}>
          <Text>
            <Text style={styles.termText}>
              By connecting your account, confirm that you agree with our
            </Text>
            <Text style={styles.termCondition}> Term and Condition</Text>
          </Text>
        </View>
      </View>

        <TouchableOpacity
        style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Login</Text>

          </TouchableOpacity>
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
    backgroundColor: "#FFF",
    alignItems: "center",
    backgroundColor: "white",
    height:"100%"
  },
  registerText: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
  },
  termView: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    alignSelf: "stretch",
    marginTop:120,
    marginBottom:50
  },
  signInText: {
    color: "#BD8853",
    fontFamily: "Inter, sans-serif",
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: "-0.21px",
    alignSelf: "center",
    marginTop: 20,
    marginLeft: "-17px",
    width: 115,
  },
  formContainer: {
    width: "80%",
  },
  
  inputContainer: {
    marginBottom: 10,
    backgroundColor:"white"
  },
  termText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'rgba(189, 136, 83, 1)',
  },
  termCondition: {
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  image1: {
    alignSelf: "start",
    position: "relative",
    display: "flex",
    width: 45,
    flexShrink: 0,
    flexDirection: "column",
    marginTop: 21,
    marginLeft:20,
    aspectRatio: 1,
  },
  image2: {
    alignSelf: "start",
    position: "relative",
    display: "flex",
    marginTop: 16,
    width: 141,
    flexShrink: 0,
    flexDirection: "column",
    marginLeft: 130,
    aspectRatio: 1,
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
  button: {
    backgroundColor: "white", // White background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center", // Center button within its row
    borderRadius: "10px",
    backgroundColor: '#FFF',
    boxShadow: "0px 4px 4px 0px #BD8853",
    width:150
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center"
  },
});

export default SignInPage;
