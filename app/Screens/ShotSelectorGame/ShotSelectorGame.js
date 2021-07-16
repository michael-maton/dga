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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
// import PatternCreator from "./helpers/PatternCreator";

function PatternCreator(data) {
  let patternArr = [];
  let pattern = "";

  data.forEach((e) => {
    patternArr.push(e.luck);
  });

  while (patternArr.length > 0) {
    patternArr = patternArr.filter((item) => item !== 0);
    for (let i = 0; i <= patternArr.length - 1; i++) {
      pattern += data[i].shot_id.toString();
      patternArr[i] -= 1;
    }
  }

  while (pattern.length < 33) {
    pattern = pattern.repeat(2);
  }
  
  return pattern;
}

export default class ShotSelectorGame extends Component {
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

  updateRecentSpins = (recent) => {
    this.recentSpins = [recent, ...this.recentSpins];
  };

  render() {
    const { navigation } = this.props;
    let discPattern = PatternCreator(optionsData.discType);
    let shotPattern = PatternCreator(optionsData.shotType);
    return (
      <SafeAreaView style={styles.slotGameContainer}>
        <View style={styles.recentListContainer}>
          <TouchableOpacity
            onPress={() => navigation.push("Settings")}
            style={styles.settingsContainer}
          >
            <FontAwesomeIcon
              style={styles.settingsButton}
              icon={faCog}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            title="Recent Shots"
            style={styles.recentList}
            onPress={() =>
              navigation.push("RecentList", { recentSpins: this.recentSpins })
            }
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
          {/* ----- DISC TYPE SPINNER ----- */}
          <Spinner
            recentSpins={this.recentSpins}
            updateRecentSpins={this.updateRecentSpins}
            spinnerData={optionsData.discType}
            pattern={discPattern}
            ref={(ref) => {
              this.spinnerSet[0] = ref;
            }}
          />

          {/* ----- SHOT TYPE SPINNER ----- */}
          <Spinner
            recentSpins={this.recentSpins}
            updateRecentSpins={this.updateRecentSpins}
            spinnerData={optionsData.shotType}
            pattern={shotPattern}
            ref={(ref) => {
              this.spinnerSet[1] = ref;
            }}
          />
        </View>
        <View style={styles.spinButtonContainer}>
          <TouchableOpacity
            style={styles.spinButton}
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
  },
  recentListContainer: {
    flex: 0.5,
    width: Constants.MAX_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 35,
    paddingLeft: 35,
  },
  settingsContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  settingsButton: {
    color: "white",
  },
  recentList: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  spinnerContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT / 2,
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  spinButtonContainer: {
    flex: 1.5,
    justifyContent: "flex-start",
  },
  spinButton: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
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
  buttonTextDisabled: {
    color: "#76b6ef",
  },
  waveContainer: {
    position: "absolute",
    width: 3000,
    height: Constants.MAX_HEIGHT / 2,
    flex: 1,
    justifyContent: "center",
  },
});
