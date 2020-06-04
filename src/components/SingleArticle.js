import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image } from "react-native";


const SingleArticle = ({ route }) => {
  const { articleId } = route.params;
  console.log(articleId)
  const [article, setArticle] = useState()

  useEffect((articleId) => {
   debugger
    const chooseArticle = async (articleId) => {
      let response = await axios.get(`/articles/${articleId}`);
      debugger
      setArticle(response.data.article);
    };
    chooseArticle(articleId);

  }, [])
  const specificArticle =
    article && (<>
      <View
      key={article.id}
      id={"article-" + article.id + "-title"}
      className="article-title"
    >
      <Image
        className={`article-image-${article.id}`}
        source={{ uri: article.image }}
        style={styles.image}
      />
      <text>{article.title}</text>
    </View>
      <View
        id={"article-" + article.id + "-body"}
        className="article-body"
      >
        <text>{article.body}</text>
      </View>
      <View
        id={"article-" + article.id + "-date"}
        className="published-at"
      >
        <text>{('Published at')} {article.published_at}</text>
      </View> </>)

  return (
    <View>
     {specificArticle}
      </View>
  
  
  );
};
export default SingleArticle;
