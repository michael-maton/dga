import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import Spinner from "./app/components/Spinner";
import Constants from "./Constants";
import optionsData from "./app/assets/optionData";
import BGWave from "./app/components/BGWave";
import { LinearGradient } from "expo-linear-gradient";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.spinnerSet = [];
    this.state = {
      animatedBG: new Animated.Value(0),
      runAnimation: true,
    }
  }

  fadeIn = (value) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animatedBG, {
          toValue: value,
          duration: 10000,
          useNativeDriver: false,
        }),
        Animated.timing(this.state.animatedBG, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: false,
        })
      ]),
    ).start()
  };

  // fadeIn = (value) => {
  //   Animated.loop(Animated.timing(this.state.animatedBG, {
  //     toValue: value,
  //     duration: 10000,
  //     useNativeDriver: false,
  //   }).start(() => {
  //     this.fadeIn(0)
  //   }));
    
  // };
  
  componentDidMount() {
    this.fadeIn(-3200);
  }
  render() {
    // while (this.state.runAnimation === true) {
    //   this.fadeIn()
    // }

    return (
      <SafeAreaView style={styles.appContainer}>
        <LinearGradient
          colors={["#76b6ef", "#C9CFF2", "#F2B8A2", "#F2A007"]}
          style={{ position: "absolute", height: Constants.MAX_HEIGHT, width: Constants.MAX_WIDTH }}
        />
        <Animated.View style={[styles.waveContainer, {left: this.state.animatedBG}]}>
          <BGWave height={6000} />
        </Animated.View>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select your shot</Text>
        </View> */}
        <View style={styles.spinnerContainer}>
          <Spinner
            spinnerData={optionsData.discType}
            ref={(ref) => {
              this.spinnerSet[0] = ref;
            }}
          />
          <Spinner
            spinnerData={optionsData.shotType}
            ref={(ref) => {
              this.spinnerSet[1] = ref;
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.spinButton}
          activeOpacity="0.5"
          onPress={() => {
            this.spinnerSet[0].spin();
            this.spinnerSet[1].spin();
          }}
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
    justifyContent: "center",
    backgroundColor: "#76b6ef",
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
    // backgroundColor: "#5B7A58",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderTopWidth: 10,
    borderTopColor: "#C4BE6B",
    // borderWidth: 10,
    borderBottomColor: "#C4BE6B",
    borderTopStartRadius: 600,
    borderTopEndRadius: -170,
  },
  spinButton: {
    width: Constants.MAX_WIDTH / 2.5,
    height: Constants.MAX_HEIGHT / 12.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#645c44",
    marginTop: 80,
    borderRadius: 10,
  },
  button: {
    color: "#C4BE6B",
    fontSize: 20,
    fontWeight: "bold",
  },
  waveContainer: {
    position: "absolute",
    width: 4200,
    height: Constants.MAX_HEIGHT,
    flex: 1,
    justifyContent: "center",
    // left: -3000,
  },
});
