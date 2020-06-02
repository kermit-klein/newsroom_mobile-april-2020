import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View, Text } from "react-native";

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
  return ({key: <ArticleCard article={article} />});
  });

  const examples = [{key: <Text>Hi 1</Text>}, {key: <Text>Hi 2</Text>}]

  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={articleCards}
        renderItem={({item}) => <View>{item.key}</View>}
      />
    </View>
  );
};

export default ArticleList;
