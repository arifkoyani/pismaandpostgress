import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomerOrder = ({navigation}) => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      fetchOrders();
    }, []);
  
    const handleCancelOrder = async(orderId) => {
      try{ 
        const status = "Cancelled";
        const response = await axios.put(`http://localhost:5002/api/orders/${orderId}`, { status });
        fetchOrders();
        window.alert("Status updated successfully");
      } catch (error) {
        console.log("Error updating user status:", error);
      }
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5002/api/orders");
        const ordersData = response.data;
  
  
        setOrders(ordersData);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };
  
    const renderOrder = ({ item }) => (
      <View style={styles.orderItem}>
        <Text style={styles.orderInfo}>Brand Name: {item.brand}</Text>
        <Text style={styles.orderInfo}>Placed at: {item.createdAt}</Text>
        <Text style={styles.orderInfo}>Total: Rs{item.amount}</Text>
        {item.products.map((product, index) => (
          <View key={index}>
            <Text style={styles.productInfo}>Product Title: {product.title}</Text>
            <Text style={styles.productInfo}>Quantity: {product.quantity}</Text>
          </View>
        ))}
    
        {item.status === "Processing" && (
          <Text style={{ fontSize: 16, marginBottom: 8, color: "orange" }}>
            Status: {item.status}
          </Text>
        )}
    
        {item.status === "Confirm" && (
          <Text style={{ fontSize: 16, marginBottom: 8, color: "green" }}>
            Status: {item.status}
          </Text>
        )}

        {item.status === "Cancelled" && (
          <Text style={{ fontSize: 16, marginBottom: 8, color: "red" }}>
            Status: {item.status}
          </Text>
        )}
    
        {item.status === "Processing" && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancelOrder(item._id)}
          >
            <Text style={styles.cancelButtonText}>Cancel Order</Text>
          </TouchableOpacity>
        )}
      </View>
    );
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Order History</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={renderOrder}
          contentContainerStyle={styles.orderList}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f9f9f9",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 16,
    },
    orderList: {
      paddingBottom: 16,
    },
    orderItem: {
      marginBottom: 16,
      borderRadius: 8,
      backgroundColor: "#fff",
      padding: 16,
    },
    orderInfo: {
      fontSize: 16,
      marginBottom: 8,
    },
    cancelButton: {
      backgroundColor: "red",
      padding: 8,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 8,
    },
    cancelButtonText: {
      color: "white",
      fontWeight: "bold",
    },
    
  });
  
  export default CustomerOrder;
  