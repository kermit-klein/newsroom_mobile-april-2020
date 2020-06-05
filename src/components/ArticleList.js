import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View } from "react-native";
import Category from "./Category";

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
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
      
      <FlatList
        data={articleCards}
        renderItem={({ item }) => <View>{item.key}</View>}
      />
    </View>
=======
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
>>>>>>> 95ba0fa234d5573744f6edf3c3370f2d3d4f53b3
  );
};
export default ArticleList;
