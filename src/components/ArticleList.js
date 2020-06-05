import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View } from "react-native";
import Category from "./Category";

const ArticleList = () => {
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

  let articleCards = articleList.map((article) => {
    return { key: <ArticleCard article={article} /> };
  });

  return (
    <View style={{ flex: 1 }}>
      <Category />
      <FlatList
        data={articleCards}
        renderItem={({ item }) => <View>{item.key}</View>}
      />
    </View>
  );
};

export default ArticleList;
