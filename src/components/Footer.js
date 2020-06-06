import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useSelector, connect } from "react-redux";
import Login from "./Login";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";

const Footer = ({ dispatch }) => {
  let [fontsLoaded] = useFonts({
    CinzelDecorative_900Black,
    EBGaramond_400Regular,
  });
  const authenticated = useSelector((state) => state.authenticated);
  const [modalVisible, setModalVisible] = useState(false);

  const showButton = authenticated ? (
    <TouchableOpacity
      testID={"Logoutbutton"}
      onPress={() => {
        dispatch({
          type: "CHECK_LOGIN",
          payload: { authenticated: false },
        });
      }}
    >
      <Text style={styles.sub}>Logout</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      testID={"Loginbutton"}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Text style={styles.sub}>Login</Text>
    </TouchableOpacity>
  );

  const modalShow = !modalVisible && (
    <>
      <Text style={styles.header}>DNS </Text>
      {showButton}
    </>
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.background}>
        <Modal
          style={styles.formModal}
          presentationStyle="overFullScreen"
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been Opened.");
          }}
        >
          <Login
            visibleForm={modalVisible}
            dispatch={dispatch}
            setModalVisible={setModalVisible}
          />
        </Modal>
        {modalShow}
      </View>
    );
  }
};
const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 20,
    fontFamily: "CinzelDecorative_900Black",
    padding: 20,
  },
  background: {
    flexDirection: "row",
    backgroundColor: "#409d9b",
    justifyContent: "center",
    alignItems: "center",
  },
  sub: {
    color: "white",
    fontSize: 20,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
  },
  formModal: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#409d9b",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect()(Footer);
