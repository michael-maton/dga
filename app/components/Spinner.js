import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Constants from "../../Constants";
import OptionList from "./OptionList";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    // this.data = this.props.spinnerData;
    this.state = {
      width: Constants.MAX_WIDTH / 1.75,
      height: Constants.MAX_HEIGHT / 7,
    };
    this.optionSet = null;
  }

  spin = () => {
    //   console.log(this.optionSet)
    this.optionSet.scrollByOffset(6);
  };

  render() {
    // finds length of optionsList
    // Array.apply(null, Array(this.props.spinnerData.length)).map((el, idx) => {
    //   this.optionsList[idx] = idx;
    // });
    // console.log(this.optionsList);
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
    borderRadius: 10,
    overflow: "hidden",
  },
});
