import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

const Category = () => {
  const [selectedValue, setSelectedValue] = useState("Category");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Economy" value="economy" />
        <Picker.Item label="World" value="world" />
        <Picker.Item label="Sport" value="sport" />
        <Picker.Item label="Entertainment" value="entertainment" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default Category;
