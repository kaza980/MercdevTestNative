/*

import generalStyles from "../../../assets/style/style.css";
import styles from "./LoginForm.css";
import classNames from 'classnames';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const LoginFields = t.struct({
  email: t.String,
  password: t.String
});*/
import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { Component } from "react";
import { Input } from "../../../components/Input/Input.js";
import { LoginButton } from "../../../components/LoginButton/LoginButton.js";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.sendLoginForm = this.sendLoginForm.bind(this);
    this.state = { email: null, password: null, error: null };
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.nativeEvent.text
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.nativeEvent.text
    });
  }

  navigateToProfile(user) {
    console.log("nagigateToProfile. user: " + user);
    console.log(this.props.navigation);
    if (user) this.props.navigation.navigate("ProfileScreen", { user: user });
  }

  async sendLoginForm(event) {
    console.log("я тут");
    try {
      console.log(this.state.email + " " + this.state.password);
      const rawResponse = await fetch(
        "https://us-central1-mercdev-academy.cloudfunctions.net/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
        }
      );
      const content = await rawResponse.json();
      console.log(content);
      if (!rawResponse.ok) {
        this.setState({
          error: content.error
        });
        console.log(error);
      } else {
        const user = content;
        this.setState({
          error: null,
          email: null,
          password: null
        });
        this.navigateToProfile(user);
      }
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }

  //todo: сохранение значений полей при сворачивании
  //todo: исправить ошибку с длительным нажатием на кнопку

  render() {
    return (
      <View>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <View style={styles.loginForm}>
            <Text style={styles.loginForm__p}>Log In</Text>
          </View>
          <Input
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            keyboardType="email-address"
          />
          <Input
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            secureTextEntry={true}
          />

          <LoginButton title="Login" onPress={this.sendLoginForm} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    marginBottom: 32,
    width: 112,
    height: 24,
    opacity: 0.8
  },
  loginForm__p: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: "#262626"
  } /*,
    login-form__error-block: {
        height: 40px;
        borderRadius: 4px;
        backgroundColor: rgba(237, 65, 89, 0.25);
    },
    login-form__error-block__p: {
        paddingLeft: 15px;
        paddingTop: 12px;
        fontFamily: 'Arial';
        fontSize: 12px;
        fontWeight: 500;
        fontStyle: normal;
        fontStretch: normal;
        lineHeight: normal;
        letterSpacing: normal;
        color: '#ed4159';
    }*/
});
/*

@media (min-device-width: 320px) and (max-device-width: 480px) {
    .login-form {
        width: 65px;
    }

    .login-form__error-block {
        width: 240px;
    }
}

@media (orientation: landscape) and (min-device-height: 320px) and (max-device-height: 480px) {
    .login-form {
        width: 112px;
    }

    .login-form__error-block {
        width: 416px;
    }
}
*/
