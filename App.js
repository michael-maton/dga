import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Spinner from "./app/components/Spinner";
import Constants from "./Constants";
import optionsData from "./app/assets/optionData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.spinnerSet = [];
  }

  render() {
    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select your shot</Text>
        </View>
        <View style={styles.spinnerContainer}>
          <Spinner spinnerData={optionsData.discType} ref={(ref) => { this.spinnerSet[0] = ref; }}/>
          <Spinner spinnerData={optionsData.shotType} ref={(ref) => { this.spinnerSet[1] = ref; }}/>
        </View>
        <TouchableOpacity
          style={styles.spinButton}
          activeOpacity="0.5"
          onPress={() => { this.spinnerSet[0].spin(); this.spinnerSet[1].spin(); }}
        >
          <Text style={styles.button}> Spin </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#C9CFF2",
  },
  headerContainer: {
    height: "10%",
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2B8A2",
  },
  headerText: {
    fontSize: 40,
    // fontWeight: "bold",
    color: "#C4BE6B",
  },
  spinnerContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT / 2,
    backgroundColor: "#5B7A58",
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderTopWidth: 10,
    borderTopColor: "#C4BE6B",
    borderBottomWidth: 10,
    borderBottomColor: "#C4BE6B",
    borderTopStartRadius: 600,
    borderTopEndRadius: -170,
  },
  spinButton: {
    width: Constants.MAX_WIDTH / 2.5,
    height: Constants.MAX_HEIGHT / 12.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7F7BA7",
    borderRadius: 10,
  },
  button: {
    color: "#C4BE6B",
    fontSize: 20,
    fontWeight: "bold",
  },
});
