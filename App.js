import React from "react";
import { StyleSheet, View } from "react-native";
import ArticleList from "./src/components/ArticleList";
import Header from "./src/components/Header";
import axios from "axios";
import Footer from "./src/components/Footer";
import Category from "./src/components/Category";
axios.defaults.baseURL = "http://localhost:3000/api";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Category />
      <View style={{ flex: 1, height: 1 }}>
        <ArticleList />
      </View>
      <Footer />
    </View>
  );
}

export default App;
