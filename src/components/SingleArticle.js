import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image } from "react-native";


const SingleArticle = (props) => {
  const [article, setArticle] = useState()
  const { id } = useParams()

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${id}`);
      setArticle(response.data.article);
    };
    chooseArticle();
  }, [])


  return (

    <View
      key={article.id}
      id={"article-" + article.id + "-title"}
      className="article-title"
    >
      <text>{article.title}</text>
    </View>
  
    <View
      key={article.id}
      id={"article-" + article.id + "-body"}
      className="article-body"
    >
      <text>{article.body}</text>
    </View>
    <View
      key={article.id}
      id={"article-" + article.id + "-date"}
      className="published-at"
    >
      <text>{('Published at')} {article.published_at}</text>
    </View>
    <Image
      className={`article-image-${article.id}`}
      source={{ uri: article.image }}
      style={styles.image}
    />
  
  
  );
};
export default SingleArticle;
