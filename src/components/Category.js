import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";

const Category = (props) => {
  let listCategory = [
    { label: "All", value: null },
    { label: "Current", value: "current" },
    { label: "Economy", value: "economy" },
    { label: "World", value: "world" },
    { label: "Politics", value: "politics" },
    { label: "Sport", value: "sport" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Other", value: "other" },
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
          containerStyle={{
            height: 45,
            flex: 1,
          }}
          style={{ backgroundColor: "#dbdbdb" }}
          dropDownStyle={{
            backgroundColor: "#dbdbdb",
          }}
          dropDownMaxHeight={185}
          labelStyle={{
            color: "black",
            fontSize: 16,
            fontFamily: "EBGaramond_400Regular",
            fontWeight: "bold",
          }}
          onChangeItem={(item) => {
            props.categorySelect(item.value);
          }}
          placeholder="Category"
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "flex-end",
    ...(Platform.OS !== "android" && {
      zIndex: 10,
    }),
  },
});

export default Category;
