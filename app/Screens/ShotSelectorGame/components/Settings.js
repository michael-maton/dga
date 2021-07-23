import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "../../../../Constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import optionData from "../../../assets/optionData";
import optionData2 from "../../../assets/optionData2";
import { connect } from "react-redux";
import { editList } from "../../../Store/actions/shots";

function Settings({ shots, editShotList, navigation }) {
  const [shotForm, setShotForm] = useState(shots);

  const handleLuckToggle = (type, idx, currentLuck) => {
    let newLuck = 1;
    if (currentLuck != 0) {
      newLuck = 0;
    }
    const updatedShot = {
      ...shotForm[type][idx],
      luck: newLuck,
    };
    setShotForm({
      ...shotForm,
      [shotForm[type]]: [
        ...shotForm[type],
        (shotForm[type][idx] = updatedShot),
      ],
    });
  };

  return (
    <SafeAreaView style={styles.settingsWrapper}>
      <ScrollView contentContainerStyle={styles.settingsContainer}>
        <Text style={styles.titles}>Disc Type:</Text>
        {shotForm.discType.map((item, idx) => {
          let currentLuck = "";
          if (item.luck == 1) {
            currentLuck = "low"
          } else if (item.luck == 2) {
            currentLuck = "med"
          } else if (item.luck == 5) {
            currentLuck = "high"
          }
          if (item.shot_id != 9) {
            return (
              <View key={idx} style={styles.individualWrapper}>
                <BouncyCheckbox
                  size={30}
                  style={{ paddingVertical: 5, marginLeft: 40, width: 190 }}
                  fillColor="#76b6ef"
                  unfillColor="#FFFFFF"
                  text={item.option}
                  textStyle={{ color: "white", textDecorationLine: "none" }}
                  isChecked={item.luck > 0 ? true : false}
                  iconStyle={{ borderColor: "white" }}
                  value={1}
                  onPress={() => {
                    handleLuckToggle("discType", idx, item.luck);
                  }}
                />
                <View style={styles.luckWrapper}>
                  <TouchableOpacity activeOpacity={1}>
                    <Text style={currentLuck == "low" ? styles.luckText : styles.disabledLuckText}>Low</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={currentLuck == "med" ? styles.luckText : styles.disabledLuckText}>Med</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={currentLuck == "high" ? styles.luckText : styles.disabledLuckText}>High</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        })}
        <Text style={[styles.titles, { paddingTop: 10 }]}>Shot Type:</Text>
        {shotForm.shotType.map((item, idx) => {
          let currentLuck = "";
          if (item.luck == 1) {
            currentLuck = "low"
          } else if (item.luck == 2) {
            currentLuck = "med"
          } else if (item.luck == 5) {
            currentLuck = "high"
          }
          if (item.shot_id != 9) {
            return (
              <View key={idx} style={styles.individualWrapper}>
                <BouncyCheckbox
                  size={30}
                  style={{ paddingVertical: 5, marginLeft: 40, width: 190 }}
                  fillColor="#76b6ef"
                  unfillColor="#FFFFFF"
                  text={item.option}
                  textStyle={{ color: "white", textDecorationLine: "none" }}
                  isChecked={item.luck > 0 ? true : false}
                  iconStyle={{ borderColor: "white" }}
                  onPress={() => {
                    handleLuckToggle("shotType", idx, item.luck);
                  }}
                />
                <View style={styles.luckWrapper}>
                  <TouchableOpacity activeOpacity={1}>
                    <Text style={currentLuck == "low" ? styles.luckText : styles.disabledLuckText}>Low</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={currentLuck == "med" ? styles.luckText : styles.disabledLuckText}>Med</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={currentLuck == "high" ? styles.luckText : styles.disabledLuckText}>High</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        })}
        <TouchableOpacity
          title="Back"
          style={styles.saveButton}
          onPress={() => {
            editShotList(shotForm);
            navigation.goBack();
            navigation.pop();
            navigation.push("ShotSelectorGame");
          }}
        >
          <Text style={styles.saveButtonText}> Save </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    shots: state.shots.shotList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editShotList: (newList) => dispatch(editList(newList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  settingsWrapper: {
    width: Constants.MAX_WIDTH,
    // height: Constants.MAX_HEIGHT,
    backgroundColor: "#76b6ef",
  },
  settingsContainer: {
    paddingTop: 10,
    color: "white",
    backgroundColor: "#76b6ef",
    // alignItems: "center",
  },
  individualWrapper: {
    flexDirection: "row",
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
  },
  titles: {
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  luckWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  luckText: {
    color: "white",
    fontSize: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  disabledLuckText:{
    color: "gray",
    fontSize: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 6,
    textAlign: "center",
    opacity: 0.5,
  },
  saveButton: {
    width: Constants.MAX_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  saveButtonText: {
    width: 100,
    textAlign: "center",
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
});
