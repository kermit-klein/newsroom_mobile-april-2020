import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image, Text, StyleSheet } from "react-native";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";
import PremiumBlocker from "./PremiumBlocker";

const SingleArticle = ({ route }) => {
  const { articleId } = route.params;
  const [article, setArticle] = useState({});

  const chooseArticle = async () => {
    let response = await axios.get(`/articles/${articleId}`);
    setArticle(response.data.article);
  };

  useEffect(() => {
    chooseArticle();
  }, []);
  const specificArticle = article && (
    <View>
      <View key={article.id}>
        <Image source={{ uri: article.image }} style={styles.image} />
        <Text id={"article-title-" + article.id} style={styles.title}>
          {article.title}
        </Text>
      </View>
      <View style={styles.background}>
        <View>
          <Text id={"article-date-" + article.id} style={styles.p}>
            {"Published at"} {article.published_at}
          </Text>
        </View>
        <View>
          <Text id={"article-body-" + article.id} style={styles.p}>
            {article.body}
            <PremiumBlocker />
          </Text>
        </View>
      </View>
    </View>
  );

  return <View>{specificArticle}</View>;
};
const styles = StyleSheet.create({
  title: {
    position: "absolute",
    padding: 4,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    color: "white",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: 250,
    width: 420,
  },
  background: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  p: { fontFamily: "EBGaramond_400Regular", fontSize: 17, padding: 15 },
});
export default SingleArticle;
