import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "../../../../Constants";
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

  // returns number [min, max]
  randomChoice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // spinning function
  spin = () => {
    this.optionSet.scrollByOffset(
      this.randomChoice(7, Constants.PATTERN.length)
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
          recentSpins={this.props.recentSpins}
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
    // backgroundColor: "#C4BE6B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
    // borderColor: "#645c44",
  },
});
