import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PremiumBlocker = () => {
  return (
    <>
      <View id="cover" style={styles.cover}></View>
      <View id="premium-blocker" style={styles.premiumBlocker}>
        <Text style={styles.premiumText}>This is a premium article</Text>
        <Text>
          <AntDesign name="lock1" size="24" color="white" />
        </Text>
        <Text style={styles.premiumText}>Sign in to view this article</Text>
      </View>
    </>
  );
};

// #premium-blocker > * {
//   color: white;
//   margin-top: 5px;
//   margin-bottom: 5px;
// }

const styles = StyleSheet.create({
  cover: {
    background:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1))",
    marginTop: -10,
    height: 40,
    position: "relative",
    zIndex: 12,
  },
  premiumBlocker: {
    display: "flex",
    flexDirection: "column",
    border: "2 solid grey",
    alignItems: "center",
    backgroundColor: "#409d9b",
    borderRadius: 3,
  },
  premiumText: {
    color: "white",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default PremiumBlocker;
