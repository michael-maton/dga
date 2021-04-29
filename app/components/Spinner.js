import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Constants from "../../Constants";
import OptionList from "./OptionList";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.spinnerData;
  }

  render() {
    return (
        <View style={styles.reel}>
            <OptionList options={this.data}/>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  reel: {
    width: Constants.MAX_WIDTH / 1.75,
    height: Constants.MAX_HEIGHT / 7,
    backgroundColor: "#C4BE6B",
    alignItems: "center",
    borderRadius: 10,

    overflow: "hidden",
  },
});
