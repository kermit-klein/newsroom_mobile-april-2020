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
import Category from "./src/components/Category";
axios.defaults.baseURL = "http://localhost:3000/api";
const Stack = createStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
      <Header />
      <Category />
      <View style={{ flex: 1, height: 1 }}>
        <ArticleList />
      </View>
      <Footer />
    </View>
=======
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
>>>>>>> 95ba0fa234d5573744f6edf3c3370f2d3d4f53b3
  );
}

export default App;
