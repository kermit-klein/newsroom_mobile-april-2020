import { useState } from "react";
import * as React from "react";
import { connect } from "react-redux";
import auth from "../modules/auth";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./module/Login.component.style.js";

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
            role: response.data.role,
            uid: response.data.uid,
          },
        });
      props.setModalVisible(false);
    } catch (error) {
      let err = error;
      debugger;
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
          <View style={styles.backgound}>
            <TouchableOpacity
              testID={"loginText"}
              onPress={() => {
                props.setModalVisible(false);
              }}
            >
              <Text style={styles.sub}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={20} color="#409d9b" />
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
            <Icon name="key" size={20} color="#409d9b" />
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
          <View style={styles.backgound}>
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
        </View>
      )}
      {message}
    </View>
  );
};

export default connect()(Login);
