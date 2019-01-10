import { LoginButton } from "../../../components/LoginButton/LoginButton.js";
//import { UserContext } from "../MainScreen.jsx";
import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToAuth = this.navigateToAuth.bind(this);
    this.sendProfileForm = this.sendProfileForm.bind(this);
  }

  navigateToAuth() {
    this.props.navigation.navigate("AuthScreen");
  }

  sendProfileForm() {
    this.navigateToAuth();
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center"
        }}
      >
        <View style={styles.profileForm__avatar}>
          <Image
            style={styles.avatar__image}
            source={{ uri: this.props.user.photoUrl }}
          />
        </View>
        <View style={styles.profileForm__nickname}>
          <Text style={styles.nickname__text}>{this.props.user.name}</Text>
        </View>
        <LoginButton title="Logout" onPress={this.sendProfileForm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileForm__avatar: {
    width: 86,
    height: 86,
    borderWidth: 1,
    borderColor: "#979797",
    borderStyle: "solid",
    borderRadius: 50
  },
  profileForm__nickname: {
    marginTop: 24,
    marginBottom: 24
  },
  avatar__image: {
    borderRadius: 50,
    width: 86,
    height: 86,
    overflow: "visible"
  },
  nickname__text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#262626"
  }
});
