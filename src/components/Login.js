import { useState } from "react";
import * as React from "react";
// import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View testID={"login-form"} style={styles.container}>
      <Text style={styles.sub}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID={"email"}
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
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
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableHighlight
        testID={"submit"}
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => console.log("LOGIN")}
      >
        <Text style={styles.loginText}>Submit</Text>
      </TouchableHighlight>
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

export default Login;
