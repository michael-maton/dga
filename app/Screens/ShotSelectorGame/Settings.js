import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Constants from "../../../Constants";

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <SafeAreaView style={styles.settingsWrapper}>
          <Text>Settings Page</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    settingsWrapper: {
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH,
        alignItems: "center",
        backgroundColor: "#76b6ef",
    },
});