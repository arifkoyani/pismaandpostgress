import React, { useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Image
          source={require('../images/logoo.png')} // Replace with the actual path to your image
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
});

export default Splash;
