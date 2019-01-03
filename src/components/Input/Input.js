import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export function Input(props) {
  return (
    <View style={styles.input}>
      <TextInput style={styles.input__inputField} required {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    marginBottom: 24,
    width: 300
  },
  input__inputField: {
    paddingLeft: 15,
    borderRadius: 4,
    //border: solid 1px rgba(151, 151, 151, 0.25);
    backgroundColor: "#f1f1f1",
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#262626"
  }
});
