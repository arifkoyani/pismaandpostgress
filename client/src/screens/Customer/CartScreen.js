import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../../features/BasketSlice';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

const CartScreen = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(state.cart.items);
  const [quantity, setQuantity] = useState(null);
  console.log(cartItems)

  const deleteItem = (orderId) => {
    setCartItems(cartItems.filter((item) => item.id !== orderId));
    dispatch(removeFromCart({ id: orderId }));
  }

  const incrementQuantity = (quantity) => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = (quantity) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <View>
          {cartItems.map((item) => (
            <View key={item._id} style={styles.cartItem}>
              <Image source={{ uri: `http://localhost:5000/${item.image}` }} style={styles.productImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                <View style={styles.quantityContainer}>
                  
                  <View style={styles.quantityButtons}>
                    <TouchableOpacity
                      onPress= {() => {item.quantity-1}}
                    >
                      <Icon name="remove" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.itemQuantity}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity
                      onPress= {() => {item.quantity+1}}
                    >
                      <Icon name="add" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteItem(item.id)}
              >
                <Icon name="delete" size={28} color="red" />
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.totalText}>
            Total Items:
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => navigation.navigate("PlaceOrder")}
          >
            <Text style={styles.addToCartButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Text style={styles.addToCartButtonText}>Add Delivery Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => navigation.navigate("AddCard")}
      >
        <Text style={styles.addToCartButtonText}>Add Card Information</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FEFEFE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemQuantity: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    width: 60,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
  addToCartButton: {
    backgroundColor: "#09605e",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CartScreen;
