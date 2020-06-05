import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import ArticleList from "./src/components/ArticleList";
import SingleArticle from "./src/components/SingleArticle";
import Header from "./src/components/Header";
import axios from "axios";
import Footer from "./src/components/Footer";
import Login from "./src/components/Login";

axios.defaults.baseURL = "http://localhost:3000/api";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Stack.Navigator headerMode="none" initialRouteName="ArticleList">
          <Stack.Screen name="ArticleList" component={ArticleList} />
          <Stack.Screen name="SingleArticle" component={SingleArticle} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
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
