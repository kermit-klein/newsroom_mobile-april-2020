import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList } from "react-native";
import Category from "./Category";
import ScrollArrow from "./ScrollArrrow";

const ArticleList = ({ navigation }) => {
  const [category, setCategory] = useState("all");
  const [articleList, setArticleList] = useState([]);
  const fetchArticleList = async () => {
    try {
      const response = await axios.get("/articles", { category: category });
      setArticleList(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticleList();
  }, [category]);

  const categorySelect = (item) => {
    setCategory(item.value);
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
      <ScrollArrow />
    </>
  );
};

export default ArticleList;
