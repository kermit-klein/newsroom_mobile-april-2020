import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.header}>Daily News Sense</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: "10vw",
    fontFamily: "serif",
    fontWeight: "bolder",
    padding: "10px",
  },
  background: {
    backgroundColor: "#409d9b",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
