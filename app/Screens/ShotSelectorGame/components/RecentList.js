import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

export default class RecentList extends Component {
  constructor(props) {
    super(props);
    this.recentSpins = this.props.route.params.recentSpins;
  }

  render() {
    console.log(this.recentSpins);
    return (
      <SafeAreaView>
        {this.recentSpins.map((spin, idx) => (
          <Text key={idx}>{spin}</Text>
        ))}
      </SafeAreaView>
    );
  }
}
