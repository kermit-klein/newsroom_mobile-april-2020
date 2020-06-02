import React from "react";
import { StyleSheet, View } from "react-native";
import ArticleList from "./src/components/ArticleList";
import Header from "./src/components/Header";
import axios from "axios";
import Footer from "./src/components/Footer";

axios.defaults.baseURL = "http://localhost:3000/api";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <ArticleList />
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
