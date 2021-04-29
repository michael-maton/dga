import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Constants from "../../Constants";
import Option from "./Option";

export default class OptionList extends Component {
  constructor(props) {
    super(props);
    this.options = this.props.data;
  }

  render() {
    return (
      <View style={styles.optionList}>
            {this.props.options.map((el, idx) => {
              return <Option optionObject={el} key={idx}/>
            })}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  optionList: {
    width: Constants.MAX_WIDTH / 2,
    height: Constants.MAX_HEIGHT / 7,
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 10,

    overflow: "hidden",
  },
});