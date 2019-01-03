import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class Panel extends React.Component {
  render() {
    return <View style={styles.panel} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  panel: {
    //padding: 32 24 48 24,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 48,
    paddingLeft: 24,
    maxWidth: 500,
    width: 340,
    height: 400,
    borderRadius: 8,
    //boxShadow: 0 2px 16px 0 rgba(0, 0, 0, 0.15);
    backgroundColor: "#ffffff"
  }
});
