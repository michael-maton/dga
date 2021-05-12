import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Constants from "../../Constants";
import OptionList from "./OptionList";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Constants.MAX_WIDTH / 1.75,
      height: Constants.MAX_HEIGHT / 7,
    };
    this.optionSet = null;
  }

  randomChoice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  spin = () => {
    this.optionSet.scrollByOffset(
      this.randomChoice(7, (Constants.PATTERN.length * Constants.REPEAT) / 3)
    );
  };

  render() {
    return (
      <View
        style={[
          styles.reel,
          { width: this.state.width, height: this.state.height },
        ]}
      >
        <OptionList
          options={this.props.spinnerData}
          height={this.state.height}
          width={this.state.width}
          ref={(ref) => {
            this.optionSet = ref;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reel: {
    backgroundColor: "#C4BE6B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 7,
    borderColor: "#645c44",
  },
});
