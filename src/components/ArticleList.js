import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";

const ArticleList = ({ navigation }) => {
  const [articleList, setArticleList] = useState([]);
  const fetchArticleList = async () => {
    try {
      const response = await axios.get("/articles");
      setArticleList(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticleList();
  }, []);

  return (
    <>
      {articleList && (
        <FlatList
          data={articleList}
          renderItem={({ item }) => (
            <ArticleCard article={item} navigation={navigation} />
          )}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  sub: {
    color: "white",
    fontSize: 15,
    fontFamily: "EBGaramond_400Regular",
    padding: 5,
    backgroundColor: "#409d9b",
    textAlign: "center",
  },
});
export default ArticleList;
