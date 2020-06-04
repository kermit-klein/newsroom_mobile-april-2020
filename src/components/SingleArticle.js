import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View } from "react-native";

const SingleArticle = ({ route }) => {
  const { articleId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Single Article</Text>
    </View>
  );
};
export default SingleArticle;
