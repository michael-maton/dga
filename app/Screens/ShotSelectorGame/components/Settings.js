import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "../../../../Constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import optionData from "../../../assets/optionData";


export default class Settings extends Component {
  state = { defaultCheck: true };

  render() {
    return (
      <SafeAreaView style={styles.settingsWrapper}>
        <ScrollView contentContainerStyle={styles.checkboxes}>
          <Text style={styles.titles}>Disc Type:</Text>
          {optionData.discType.map((item, idx) => {
            return (
              <BouncyCheckbox
              key={idx}
              size={30}
              style={{ paddingBottom: 10, marginLeft: 40, width: 200 }}
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
          <Text style={styles.titles}>Shot Type:</Text>
          {optionData.shotType.map((item, idx) => {
            return (
              <BouncyCheckbox
                key={idx}
                size={30}
                style={{ paddingBottom: 10, marginLeft: 40, width: 200 }}
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  settingsWrapper: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    backgroundColor: "#76b6ef",
  },
  checkboxes: {
    paddingTop: 10,
    color: "white",
    backgroundColor: "#76b6ef",
  },
  titles: {
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});
