import { useState } from "react";
import * as React from "react";
import { connect } from "react-redux";
import auth from "../modules/auth";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmithandler = async () => {
    try {
      const response = await auth.signIn(email, password);
      response.success &&
        props.dispatch({
          type: "CHECK_LOGIN",
          payload: {
            authenticated: response.success,
          },
        });
      props.setModalVisible(false);
    } catch (error) {
      let err = error;
      setErrorMessage(err.response.data.errors[0]);
    }
  };

  const message = !!errorMessage && props.visibleForm && (
    <Text style={styles.errorText} testID={"error-message"}>
      {errorMessage}
    </Text>
  );

  return (
    <View style={styles.background}>
      {props.visibleForm && (
        <View testID={"login-form"}>
          <TouchableOpacity
            testID={"loginText"}
            onPress={() => {
              props.setModalVisible(false);
            }}
          >
            <Text style={styles.sub}>Login</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              testID={"email"}
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
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
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity
            testID={"submit"}
            style={styles.buttonContainer}
            onPress={() => {
              onSubmithandler();
            }}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      {message}
    </View>
  );
};

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#409d9b",
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: 250,
    marginBottom: 20,
    flexDirection: "column",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  buttonContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#409d9b",
    shadowColor: "rgba(0.6, 0.5, 0.5, 0.5)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: { width: 2, height: 13 },
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    fontFamily: "EBGaramond_400Regular",
  },
  sub: {
    color: "#409d9b",
    fontSize: 25,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  errorText: {
    color: "red",
  },
});

export default connect()(Login);
