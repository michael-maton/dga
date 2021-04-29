import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Constants from "../../Constants";

function Spinner(props) {
  return (

      <View style={styles.spinner}></View>

  );
}
const styles = StyleSheet.create({
  spinner: {
    width: Constants.MAX_WIDTH / 1.75,
    height: Constants.MAX_HEIGHT / 7,
    backgroundColor: "#C4BE6B",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default Spinner;
