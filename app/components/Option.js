import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "../../Constants";

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#5B7A58",
      backgroundColor: "#D3C7D7",
    };
  }

  optionStyle = () => {
    return {
      width: Constants.MAX_WIDTH / 2,
      height: Constants.MAX_HEIGHT / 7,
      justifyContent: "center",
      alignItems: "center",
    };
  };

  render() {
    return (
      <View style={styles.optionContainer}>
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
    justifyContent: "center",
  },
});
