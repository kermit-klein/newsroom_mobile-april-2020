import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { FlatList, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const fakeArticles = {
  articles: [
    {
      id: 1,
      title:
        "Let's see what a really long title looks like. This is the first title",
      image: "https://picsum.photos/800/600",
    },
    {
      id: 2,
      title: "You cannot believe this",
      image: "https://picsum.photos/500/400",
    },
    {
      id: 3,
      title: "This will amaze you",
      image: "https://picsum.photos/400/300",
    },
    {
      id: 4,
      title: "Why aren't you impressed?",
      image: "https://picsum.photos/700/500",
    },
    {
      id: 5,
      title:
        " Let's see what a really long title looks like. Let's see what a really long title looks like. Well, now it's really long.",
      image: "https://picsum.photos/400/300",
    },
  ],
};

const ArticleList = ({ navigation }) => {
  const [articleList, setArticleList] = useState(fakeArticles.articles);

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
    return {
      key: (
        <TouchableOpacity
          id={"button-" + article.id }
          onPress={() =>
            navigation.navigate("SingleArticle", {
              articleId: article.id,
            })
          }
        >
          <ArticleCard article={article} />
        </TouchableOpacity>
      ),
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={articleCards}
        renderItem={({ item }) => <View>{item.key}</View>}
      />
    </View>
  );
};
export default ArticleList;
