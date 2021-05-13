import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "./Constants";
import SlotsSelectorGame from "./app/Screens/ShotSelectorGame/SlotsSelectorGame";

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <SlotsSelectorGame />
    </SafeAreaView>
  );
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
