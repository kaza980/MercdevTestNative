/*import Panel from "./Panel/Panel.jsx";
import LoginForm from "./LoginForm/LoginForm.jsx";
import ProfileForm from "./ProfileForm/ProfileForm.jsx";
import styles from "./MainScreen.css";

export const UserContext = React.createContext({
  user: null,
  updateUser: () => {}
});

*/

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from "react-native";

import Panel from "./Panel/Panel.js";
import LoginForm from "./LoginForm/LoginForm.js";
import ProfileForm from "./ProfileForm/ProfileForm.js";

export default class MainScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = { user: null };
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/img/rectangle-2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View>
          <View style={styles.appLogo}>
            <Image
              style={styles.appLogoImage}
              source={require("../../assets/img/w-mercury-development.png")}
            />
            <Panel>
              {this.state.user ? (
                <ProfileForm user={this.state.user} updateUser={this.updateUser} />
              ) : (
                <LoginForm updateUser={this.updateUser} />
              )}
            </Panel>
          </View>
        </View>
      </ImageBackground>
    );
  }

  updateUser(user) {
    this.setState({ user: user });
  }
  /*
  render() {
    return (
      <View>
        <View className={styles["app-logo"]}>
          <img className={styles["app-logo__logo"]} src="./src/assets/img/w-mercury-development.svg" />
        </View>
        <UserContext.Provider value={this.state}>
          <Panel>
            {this.state.user ? (
              <ProfileForm updateUser={this.updateUser} />
            ) : (
              <LoginForm updateUser={this.updateUser}/>
            )}
          </Panel>
        </UserContext.Provider>
      </View>
    );
  }*/
}

const styles = StyleSheet.create({
  appLogo: {
    width: 182,
    height: 40,
    marginTop: 43,
    marginBottom: 37
  },
  appLogoImage: {},
  body: {
    backgroundColor: "pink"
  }
});
