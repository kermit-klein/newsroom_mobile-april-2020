import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { ScrollView } from "react-native";






const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);


  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get("/articles");
        setArticleList(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleList();
  }, []);

  let articleCards = articleList.map((article) => {
    return (
      <ArticleCard
        article={article}
      />
    );
  });

  return (
    <ScrollView>
        {articleCards}
      </ScrollView>
  );
};

export default ArticleList;
