import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Button,
} from "react-native";
import Spinner from "./components/Spinner";
import Constants from "../../../Constants";
// import optionData from "../../assets/optionData";
// import optionData2 from "../../assets/optionData2";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { editList } from "../../Store/actions/shots";

class ShotSelectorGame extends Component {
  constructor(props) {
    super(props);
    this.spinnerSet = [];
    this.recentSpins = [];
    this.state = {
      animatedBG: new Animated.Value(0),
      runAnimation: true
    };
    // this.updateRecentSpins = this.updateRecentSpins.bind(this);
  }

  updateRecentSpins = (recent) => {
    this.recentSpins = [recent, ...this.recentSpins];
  };

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style = {styles.slotGameContainer}>
        <View style = {styles.recentListContainer}>
          <TouchableOpacity
            onPress = {() => navigation.push('Settings')}
            style={styles.settingsContainer}
          >
            <FontAwesomeIcon
              style = {styles.settingsButton}
              icon = {faCog}
              size = {20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            title = 'Recent Shots'
            style = {styles.recentList}
            onPress = {() =>
              navigation.push('RecentList', { recentSpins: this.recentSpins })
            }
          >
            <Text style={styles.buttonText}> Recent Spins </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spinnerContainer}>
          {/* ----- DISC TYPE SPINNER ----- */}
          <Spinner
            recentSpins={this.recentSpins}
            updateRecentSpins={this.updateRecentSpins}
            spinnerData={this.props.shotList.discType}
            pattern={this.props.discPattern}
            ref={(ref) => {
              this.spinnerSet[0] = ref;
            }}
          />

          {/* ----- SHOT TYPE SPINNER ----- */}
          <Spinner
            recentSpins = {this.recentSpins}
            updateRecentSpins = {this.updateRecentSpins}
            spinnerData = {this.props.shotList.shotType}
            pattern = {this.props.shotPattern}
            ref = {(ref) => {
              this.spinnerSet[1] = ref;
            }}
          />
        </View>
        <View style = {styles.spinButtonContainer}>
          <TouchableOpacity
            style = {styles.spinButton}
            onPress = {() => {
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

const mapStateToProps = (state) => {
  return {
    shotList: state.shots.shotList,
    discPattern: state.shots.discPattern,
    shotPattern: state.shots.shotPattern,
    pattern: state.shots.pattern
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editShotList: (newList) => dispatch(editList(newList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShotSelectorGame);

const styles = StyleSheet.create({
  slotGameContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76b6ef'
  },
  recentListContainer: {
    flex: 0.5,
    width: Constants.MAX_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 35,
    paddingLeft: 35
  },
  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  settingsButton: {
    color: 'white'
  },
  recentList: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  spinnerContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT / 2,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  spinButtonContainer: {
    flex: 1.5,
    justifyContent: 'flex-start'
  },
  spinButton: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
  },
  buttonText: {
    color: 'white'
  },
  buttonTextDisabled: {
    color: '#76b6ef'
  },
  waveContainer: {
    position: 'absolute',
    width: 3000,
    height: Constants.MAX_HEIGHT / 2,
    flex: 1,
    justifyContent: 'center'
  }
});
