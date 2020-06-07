import React, { useState } from "react";
// import {FaArrowCircleUp} from 'react-icons/fa';
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <TouchableOpacity
      onPress={() => {
        scrollTop;
      }}
    >
      <Icon
        name="arrow-circle-up"
        testID="scrollTop"
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </TouchableOpacity>
  );
};

export default ScrollArrow;
