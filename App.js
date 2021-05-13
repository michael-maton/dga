import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "./Constants";

import SlotsSelectorGame from "./app/Pages/SlotsSelectorGame";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.appContainer}>
        <SlotsSelectorGame />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },
});
