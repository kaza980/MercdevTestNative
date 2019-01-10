import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function LoginButton(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.loginButton}>
        <Text style={styles.loginButton__text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 100,
    //box-shadow: 0 4px 16px 0 rgba(237, 65, 89, 0.4);
    backgroundColor: "#ed4159",
    height: 48,
    width: 251,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16
  },
  loginButton__text: {
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#ffffff"
  }
});
