import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList } from "react-native";
import Category from "./Category";

const ArticleList = ({ navigation }) => {
  const [category, setCategory] = useState();
  const [articleList, setArticleList] = useState([]);
  const fetchArticleList = async () => {
    try {
      const categoryParam = category && { category: category };
      const params = { ...categoryParam };
      const response = await axios.get("/articles", {
        params: params,
      });
      setArticleList(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticleList();
  }, [category]);

  const categorySelect = (item) => {
    setCategory(item);
  };

  return (
    <>
      {articleList && (
        <>
          <Category categorySelect={categorySelect} />
          <FlatList
            data={articleList}
            renderItem={({ item }) => (
              <ArticleCard article={item} navigation={navigation} />
            )}
          />
        </>
      )}
    </>
  );
};

export default ArticleList;
