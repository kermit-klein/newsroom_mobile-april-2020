import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";


const Footer = () => {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.background}>
        <Text style={styles.header}>DNS </Text>
        <Text style={styles.sub}> Daily News Sense</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 20,
    fontFamily: "CinzelDecorative_900Black",
    padding: 20,
  },
  background: {
    flexDirection: "row",
    backgroundColor: "#409d9b",
    justifyContent: "center",
    alignItems: "center",
  },
  sub: {
    color: "white",
    fontSize: 20,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
  },
});

export default Footer;
