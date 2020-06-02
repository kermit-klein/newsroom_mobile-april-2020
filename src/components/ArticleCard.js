import React from "react";
import { Link } from "react-router-dom";
import { View } from "react-native";

const ArticleCard = ({ article }) => {
  return (
    <View>
      <Link
        to={{
          pathname: `/article/${article.id}`,
        }}
        key={article.id}
        id={"article-" + article.id}
      >
        <Image
          src={article.image}
          wrapped
          style={{ height: 200, width: 400 }}
        />
        <h5 className="article-title">{article.title}</h5>
      </Link>
    </View>
  );
};

export default ArticleCard;
