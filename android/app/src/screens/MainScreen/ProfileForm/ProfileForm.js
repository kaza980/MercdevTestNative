import { LoginButton } from "../../../components/LoginButton/LoginButton.js";
//import { UserContext } from "../MainScreen.jsx";
import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.sendProfileForm = this.sendProfileForm.bind(this);
  }

  sendProfileForm() {
    this.props.updateUser(null);
  }

  render() {
    return (
      <View>
        <View style={styles.profileForm__avatar}>
          <Image
            style={styles.avatar__image}
            source={{uri:"https://api.adorable.io/avatars/285/abott@adorable.png"}}
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
    //border: solid 1px #979797;
    borderRadius: 50
  },
  profileForm__nickname: {
    marginTop: 24,
    marginBottom: 24
  },
  avatar__image: {
    borderRadius: 50
  },
  nickname__text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#262626"
  }
});
