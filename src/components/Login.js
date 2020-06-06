import { useState } from "react";
import * as React from "react";
import { connect, useSelector } from "react-redux";
import auth from "../modules/auth";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Modal,
} from "react-native";

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticated = useSelector((state) => state.authenticated);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmithandler = async () => {

    try {
      const response = await auth.signIn(email, password);
      debugger
      dispatch({
      
        type: "CHECK_LOGIN",
        payload: {
          authenticated: response.success,
        },
      });
    } catch (error) {
      console.log(error);
      debugger;
    }
  };
  return (
    <View>
      {!authenticated && (
        <Modal
          style={styles.formModal}
          presentationStyle="overFullScreen"
          animationType="fade"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >

          <View testID={"login-form"} style={styles.container}>
            <Text style={styles.sub}>Login</Text>
            <View style={styles.inputContainer}>
              <TextInput
                testID={"email"}
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                id="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                testID={"password"}
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                id="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <TouchableHighlight
              testID={"submit"}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => onSubmithandler()}
            >
              <Text style={styles.loginText}>Submit</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      )}
      <Text>{errorMessage}</Text>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#409d9b",
  },
  loginText: {
    color: "white",
  },
  sub: {
    color: "#409d9b",
    fontSize: 20,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
  },
});

export default connect()(Login);
