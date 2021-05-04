import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Constants from "../../Constants";
import Option from "./Option";

export default class OptionList extends Component {
  constructor(props) {
    super(props);
    // this.scrollPatternString = "123456423165735264186413257432516";
    this.scrollPattern = Constants.PATTERN.repeat(Constants.REPEAT).split("");
    this.fullReel = [];
    this.position = Constants.PATTERN.length * Constants.REPEAT - 1;
    this.currentScrollPos =
      (Constants.PATTERN.length - 1) * this.props.height * -1;
    this.state = {
      scrollPos: new Animated.Value(this.currentScrollPos),
    };
  }

  scrollByOffset = (offset) => {
    this.currentScrollPos = this.currentScrollPos + this.props.height * offset;
    this.position = this.position - offset;
    Animated.timing(this.state.scrollPos, {
      toValue: this.currentScrollPos,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      this.position = (Constants.REPEAT - (Constants.REPEAT - 1)) * Constants.PATTERN.length + (this.position % Constants.PATTERN.length);
      this.currentScrollPos = this.position * this.props.height * -1;
      this.state.scrollPos.setValue(this.currentScrollPos);
    });
  };

  createReel = () => {
    let item = {};
    this.scrollPattern.map((el, idx) => {
      item = {
        shot_id: this.props.options[parseInt(el) - 1].shot_id,
        option: this.props.options[parseInt(el) - 1].option,
        id: idx,
      };
      this.fullReel.push(item);
    });
  };

  render() {
    this.createReel();
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
    // backgroundColor: "#C4BE6B",
    alignItems: "center",
    // borderRadius: 10,
    overflow: "hidden",
  },
});
