import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Constants from "../../Constants";
import Option from "./Option";

export default class OptionList extends Component {
  constructor(props) {
    super(props);
    this.scrollPatternString = "123456423165735264186413257432516";
    this.scrollPattern = this.scrollPatternString
      .repeat(Constants.REPEAT)
      .split("");
    this.currentScrollPos = 0;
    this.fullReel = [];
    this.state = {
      scrollPos: new Animated.Value(this.currentScrollPos),
    };
  }

  scrollByOffset = (offset) => {
    this.currentScrollPos =
      this.currentScrollPos + -1 * this.props.height * offset;
    Animated.timing(this.state.scrollPos, {
      toValue: this.currentScrollPos,
      duration: 750,
      useNativeDriver: true,
    }).start(() => {});
  };

  createReel = () => {
    let item = {}
    this.scrollPattern.map((el, idx) => {
      item = {
        shot_id: this.props.options[parseInt(el) - 1].shot_id,
        option: this.props.options[parseInt(el) - 1].option,
        id: idx,
      };
        this.fullReel.push(item)
    });
  };

  render() {
    this.createReel()
    return (
      <View style={styles.optionList}>
        <Animated.View
          style={{ transform: [{ translateY: this.state.scrollPos }] }}
        >
          {this.fullReel.map((el, idx) => {
            return <Option optionObject={el} key={idx} />;
          })}
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  optionList: {
    width: Constants.MAX_WIDTH / 2,
    height: Constants.MAX_HEIGHT / 7,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
});
