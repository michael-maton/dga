import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Constants from "../../../../Constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import optionData from "../../../assets/optionData";


export default class Settings extends Component {
  state = { defaultCheck: true };

  render() {
    return (
      <SafeAreaView style={styles.settingsWrapper}>
        <View style={styles.checkboxes}>
          {optionData.discType.map((item, idx) => {
            return (
              <BouncyCheckbox
              key={idx}
              size={30}
              style={{ paddingBottom: 10 }}
              fillColor="#76b6ef"
              unfillColor="#FFFFFF"
              text={item.option}
              textStyle={{ color: "white", textDecorationLine: "none" }}
              isChecked={this.state.defaultCheck}
              iconStyle={{ borderColor: "white" }}
              onPress={() => {}}
              />
              );
            })}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  settingsWrapper: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    backgroundColor: "#76b6ef",
  },
  checkboxes: {
    paddingTop: 10,
    color: "white",
  },
});
