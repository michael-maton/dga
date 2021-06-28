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
 
  render() {
    return (
      <SafeAreaView style={styles.slotGameContainer}>
        <View>
          <Text>Recent spins:</Text>
          {this.recentSpins.map(spin => {
            <Text>{spin}</Text>
          })}
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
            spinnerData={optionsData.discType}
            ref={(ref) => {
              this.spinnerSet[0] = ref;
            }}
          />
          <Spinner
            recentSpins={this.recentSpins}
            spinnerData={optionsData.shotType}
            ref={(ref) => {
              this.spinnerSet[1] = ref;
            }}
          />
        </View>
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
  spinnerContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT / 2,
    // marginTop: 70,
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderWidth: 10,
  },
  spinButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    // elevation: 8,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    borderColor: "white",
    borderWidth: 1,
    color: "white"
  },
  buttonText: {
    color: "white"
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
