import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from "react-native";

import Panel from "../../components/Panel/Panel.js";
import ProfileForm from "./ProfileForm/ProfileForm.js";

export default class MainScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.navigation);
    return (
      <ImageBackground
        source={require("../../assets/img/rectangle-2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.appLogo}>
            <Image
              style={styles.appLogoImage}
              source={require("../../assets/img/w-mercury-development.png")}
            />
            <Panel>
              <ProfileForm
                user={this.props.navigation.state.params.user}
                navigation={this.props.navigation}
              />
            </Panel>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  appLogo: {
    width: 182,
    height: 40,
    marginTop: 43,
    marginBottom: 37,
    alignItems: "center"
  },
  appLogoImage: { width: "100%", height: "100%", marginBottom: 37 },
  body: {
    backgroundColor: "pink"
  }
});
