import React from "react";
import { Text, Image, StyleSheet } from "react-native";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Image className={`article-image-${article.id}`} source={{ uri: article.image }} style={styles.image} />
      <Text id={`article-title-${article.id}`} style={styles.title}>
        {article.title}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    padding: "4px",
    paddingLeft: "10vw",
    paddingRight: "8px",
    bottom: "8vw",
    color: "white",
    fontSize: "6vw",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: "50vw",
    width: "100vw",
  },
});

export default ArticleCard;
