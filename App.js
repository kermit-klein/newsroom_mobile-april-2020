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

axios.defaults.baseURL = "https://newsroom-api.herokuapp.com/api";
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Stack.Navigator headerMode="none" initialRouteName="ArticleList">
          <Stack.Screen name="ArticleList" component={ArticleList} />
          <Stack.Screen name="SingleArticle" component={SingleArticle} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </>
  );
};

export default App;
