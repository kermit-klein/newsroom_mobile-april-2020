import React from "react";
import { Text, Image, StyleSheet } from "react-native";

const ArticleCard = ({ article }) => {
  const viewArticle = (
    <>
      <Image
        className={`article-image-${article.id}`}
        source={{ uri: article.image }}
        style={styles.image}
      />
      <Text id={`article-title-${article.id}`} style={styles.title}>
        {article.title}
      </Text>
    </>
  );
  return <>{viewArticle}</>;
};

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    padding: 4,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    color: "white",
    fontSize: 6,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: 250,
    width: 420,
  },
});

export default ArticleCard;
