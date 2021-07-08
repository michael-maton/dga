import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Constants from "../../../../Constants";

export default class RecentList extends Component {
  constructor(props) {
    super(props);
    this.recentSpins = this.props.route.params.recentSpins;
    this.discTypes = []
    this.shotTypes = []
  }

  generateLists = () => {
    this.recentSpins.forEach((spin, idx) => (
      idx % 2 == 0 ? this.discTypes = [...this.discTypes, spin] : this.shotTypes = [...this.shotTypes, spin]
    ))
  }

  render() {
    this.generateLists();
    console.log("DISC", this.discTypes);
    console.log("SHOT", this.shotTypes);
    return (
      <SafeAreaView style={styles.listContainer}>
        {this.recentSpins.map((spin, idx) => (
          <View style={styles.singleRecent}>
            {/* {idx % 2 != 0 ? <View style={styles.discType}><Text key={idx}>{spin}</Text></View> : <View style={styles.shotType}><Text key={idx}>{spin}</Text></View>} */}
          </View>          
        ))}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#76b6ef",
    padding: 20,
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    
  },
  singleRecent: {
    flexDirection: "row",
    width: Constants.MAX_WIDTH,
    borderWidth: 1,

  },
  discType: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },
  shotType: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },

});