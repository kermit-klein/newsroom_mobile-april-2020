import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View, TouchableOpacity } from "react-native";
import Category from "./Category";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./module/ArticleList.component.style.js";

const ArticleList = ({ navigation }) => {
  const [category, setCategory] = useState();
  const [articleList, setArticleList] = useState([]);

  let flatlistref = null;

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

  const scrollToTopAndRefresh = () => {
    flatlistref.scrollToOffset({ y: 0, animated: true });
  };
  return (
    <>
      {articleList && (
        <>
          <Category categorySelect={categorySelect} />
          <View style={styles.background}>
            <FlatList
              ref={(ref) => (flatlistref = ref)}
              data={articleList}
              renderItem={({ item }) => (
                <ArticleCard article={item} navigation={navigation} />
              )}
            />
          </View>
          <View testID="iconContainer" style={styles.iconContainer}>
            <TouchableOpacity
              testID="iconContainer"
              onPress={scrollToTopAndRefresh}
              style={styles.icon}
            >
              <Icon name="upcircle" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default ArticleList;
