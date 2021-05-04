import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "../../Constants";

export default class Option extends Component {
  constructor(props) {
    super(props);
    // this.option = this.props.optionObject.option;
    // this.id = this.props.optionObject.id;
    this.state = {
      color: "#5B7A58",
      backgroundColor: "#D3C7D7",
    };
  }

  getColorScheme = () => {
    // let colorID = this.props.optionObject.shot_id;
    // if (colorID % 2 === 1) {
    //   this.state.color = "beige";
    //   this.state.backgroundColor = "gray";
    // } else if (colorID % 2 === 0) {
    //   this.state.color = "yellow";
    //   this.state.backgroundColor = "red";
    // }

    // if (colorID === 1) {
    //   this.state.color = "beige";
    //   this.state.backgroundColor = "gray";
    // } else if (colorID === 2) {
    //   this.state.color = "yellow";
    //   this.state.backgroundColor = "red";
    // } else if (colorID === 3) {
    //   this.state.color = "white";
    //   this.state.backgroundColor = "purple";
    // } else if (colorID === 4) {
    //   this.state.color = "orange";
    //   this.state.backgroundColor = "violet";
    // } else if (colorID === 5) {
    //   this.state.color = "crimson";
    //   this.state.backgroundColor = "dodgerblue";
    // } else if (colorID === 6) {
    //   this.state.color = "gold";
    //   this.state.backgroundColor = "purple";
    // } else if (colorID === 7) {
    //   this.state.color = "purple";
    //   this.state.backgroundColor = "yellow";
    // } else if (colorID === 8) {
    //   this.state.color = "magenta";
    //   this.state.backgroundColor = "dodgerblue";
    // }
  };

  optionStyle = () => {
    return {
    //   backgroundColor: this.state.backgroundColor,
      width: Constants.MAX_WIDTH / 2,
      height: Constants.MAX_HEIGHT / 7,
      justifyContent: "center",
      alignItems: "center",
    };
  };

  render() {
    this.getColorScheme();
    return (
      <View style={this.optionStyle()}>
        <Text
          style={{
            color: this.state.color,
            fontSize: 20,
          }}
        >
          {this.props.optionObject.option}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    width: Constants.MAX_WIDTH / 2,
    height: Constants.MAX_HEIGHT / 7,
    alignItems: "center",
    borderRadius: 1000,
  },
});
