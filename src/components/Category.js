import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";

const Category = () => {
  const [selectedValue, setSelectedValue] = useState("current");

  let listCategory = [
    { label: "Current", value: "current" },
    { label: "Economy", value: "economy" },
    { label: "World", value: "world" },
    { label: "Entertainment", value: "entertainment" },
  ];
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.category}>
      <DropDownPicker
        items={listCategory}
        defaultValue={null}
        containerStyle={{ height: 45, flex: 1 }}
        style={{ backgroundColor: "#dbdbdb" }}
        dropDownStyle={{ backgroundColor: "#dbdbdb" }}
        labelStyle={{color: "black",
        fontSize: 16,
        fontFamily: "EBGaramond_400Regular",}}
        onChangeItem={(item) => {
          console.log(item.value);
          setSelectedValue(item.value);
        }}
        placeholder="Category"
      />
    </View>
  );
};
};
const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

});

export default Category;
