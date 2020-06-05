import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View } from "react-native";

const ArticleList = ({ navigation }) => {
  const [articleList, setArticleList] = useState(false);
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
            <ArticleCard article={item} navigation={navigation} id={item.id+1}/>
          )}
        />
      )}
    </>
  );
};
export default ArticleList;
