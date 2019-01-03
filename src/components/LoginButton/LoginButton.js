import React from "react";
import { View, StyleSheet, Button } from "react-native";

export function LoginButton(props) {
  return (
    <View style={styles.loginButton}>
      <Button {...props} style={styles.loginButton__buttonField} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 16,
    width: 251,
    height: 48
  },
  loginButton__buttonField: {
    borderRadius: 100,
    //box-shadow: 0 4px 16px 0 rgba(237, 65, 89, 0.4);
    backgroundColor: "#ed4159",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    color: "#ffffff"
  }
});
