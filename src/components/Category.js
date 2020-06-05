import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Category = () => {
  const [selectedValue, setSelectedValue] = useState("current");

  let listCategory = [
    { label: "Current", value: "current" },
    { label: "Economy", value: "economy" },
    { label: "World", value: "world" },
    { label: "Entertainment", value: "entertainment" },
  ];

  return (
    <View style={styles.category}>
      <DropDownPicker
        items={listCategory}
        defaultValue={null}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          console.log(item.value);
          setSelectedValue(item.value);
        }}
        placeholder="Category"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    alignItems: "flex-end",
  },
});

export default Category;
