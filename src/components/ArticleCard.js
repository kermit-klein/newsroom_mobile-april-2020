// import React from "react";
import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const ArticleCard = (props) => {
  const viewArticle = (
    <TouchableHighlight
      key={props.article.id}
      id={"button-" + props.article.id}
      onPress={() =>
        props.navigation.navigate("SingleArticle", {
          articleId: props.article.id,
        })
      }
    >
      <View>
        <Image
          className={`article-image-${props.article.id}`}
          source={{ uri: props.article.image }}
          style={styles.image}
        />
        <Text id={`article-title-${props.article.id}`} style={styles.title}>
          {props.article.title}
        </Text>
      </View>
    </TouchableHighlight>
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
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: 250,
    width: 420,
  },
});

export default ArticleCard;
