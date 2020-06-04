import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image } from "react-native";


const SingleArticle = ({ route }) => {
  const { articleid } = route.params;
  console.log(articleid)
  const [article, setArticle] = useState()

  useEffect((articleid) => {
    debugger
    const chooseArticle = async (articleid) => {
      let response = await axios.get(`/articles/${articleid}`);
      debugger
      setArticle(response.data.article);
    };
    chooseArticle(articleid);

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
     
      </View>
  
  
  );
};
export default SingleArticle;
