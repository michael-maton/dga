import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import Spinner from "./components/Spinner";
import Constants from "../../../Constants";
import optionsData from "../../assets/optionData";
import RecentList from "./components/RecentList";
import BGWave from "./components/BGWave";
import { LinearGradient } from "expo-linear-gradient";

export default class SlotsSelectorGame extends Component {
  constructor(props) {
    super(props);
    this.spinnerSet = [];
    this.recentSpins = [];
    this.state = {
      animatedBG: new Animated.Value(0),
      runAnimation: true,
    };
    this.updateRecentSpins = this.updateRecentSpins.bind(this);
  }

  // fadeIn = (value) => {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(this.state.animatedBG, {
  //         toValue: value,
  //         duration: 40000,
  //         useNativeDriver: false,
  //       }),
  //       Animated.timing(this.state.animatedBG, {
  //         toValue: 0,
  //         duration: 40000,
  //         useNativeDriver: false,
  //       }),
  //     ])
  //   ).start();
  // };

  // componentDidMount() {
  //   this.fadeIn(-2000);
  // }
  // updateRecentSpins = recent => {
  //   this.setState(currentState => {
  //     return {recentSpins: currentState += [recent]};
  //   });
  //   console.log(this.state.recentSpins)
  // }
  updateRecentSpins = (recent) => {
    this.recentSpins = [...this.recentSpins, recent];

    console.log(this.recentSpins);
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.slotGameContainer}>
        <View style={styles.recentListContainer}>
          <TouchableOpacity
            title="Recent Shots"
            onPress={() => navigation.push("RecentList", {recentSpins: this.recentSpins})}
            style={styles.recentList}
          >
            <Text style={styles.buttonText}> Recent Spins </Text>
          </TouchableOpacity>
        </View>
        {/* <LinearGradient
          colors={["#76b6ef", "#C9CFF2", "#F2B8A2", "#F2A007"]}
          style={{
            position: "absolute",
            height: Constants.MAX_HEIGHT,
            width: Constants.MAX_WIDTH,
          }}
        /> */}
        {/* <Animated.View
          style={[styles.waveContainer, { left: this.state.animatedBG }]}
        >
          <BGWave height={2000} />
        </Animated.View> */}
        <View style={styles.spinnerContainer}>
          <Spinner
            recentSpins={this.recentSpins}
            updateRecentSpins={this.updateRecentSpins}
            spinnerData={optionsData.discType}
            ref={(ref) => {
              this.spinnerSet[0] = ref;
            }}
          />
          <Spinner
            recentSpins={this.recentSpins}
            updateRecentSpins={this.updateRecentSpins}
            spinnerData={optionsData.shotType}
            ref={(ref) => {
              this.spinnerSet[1] = ref;
            }}
          />
        </View>
        <View style={styles.spinButtonContainer}>
          <TouchableOpacity
            style={styles.spinButton}
            // activeOpacity="1"
            onPress={() => {
              this.spinnerSet[0].spin();
              this.spinnerSet[1].spin();
            }}
          >
            <Text style={styles.buttonText}> Spin </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  slotGameContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
    // paddingBottom: 150,
  },
  recentListContainer: {
    flex: 0.5,
    width: Constants.MAX_WIDTH,
    justifyContent: "center",
    paddingRight: 35,
  },
  recentList: {
    // height: Constants.MAX_HEIGHT,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  recentButton: {},
  spinnerContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT / 2,
    flex: 3,
    // marginTop: 70,
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderWidth: 1,
  },
  spinButtonContainer: {
    flex: 1.5,
    // borderWidth: 1,
    justifyContent: "flex-start",
  },
  spinButton: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    // elevation: 8,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
  },
  buttonText: {
    color: "white",
  },
  waveContainer: {
    position: "absolute",
    width: 3000,
    height: Constants.MAX_HEIGHT / 2,
    flex: 1,
    justifyContent: "center",
    // paddingTop: 300,
  },
});
