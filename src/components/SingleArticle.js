import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image, Text } from "react-native";

const SingleArticle = ({ route }) => {
  const { articleId } = route.params;
  console.log(articleId);
  const [article, setArticle] = useState({});

  const chooseArticle = async () => {
    debugger;
    let response = await axios.get(`/articles/${articleId}`);
    setArticle(response.data.article);
  };

  useEffect(() => {
    chooseArticle();
  }, []);
  const specificArticle = article && (
    <>
      <View
        key={article.id}
        id={"article-" + article.id + "-title"}
        className="article-title"
      >
        <Image
          className={`article-image-${article.id}`}
          source={{ uri: article.image }}
          // style={styles.image}
        />
        <Text>{article.title}</Text>
      </View>
      <View id={"article-" + article.id + "-body"} className="article-body">
        <Text>{article.body}</Text>
      </View>
      <View id={"article-" + article.id + "-date"} className="published-at">
        <Text>
          {"Published at"} {article.published_at}
        </Text>
      </View>{" "}
    </>
  );

  return <View>{specificArticle}</View>;
};
export default SingleArticle;
