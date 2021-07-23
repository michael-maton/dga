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
import { connect } from "react-redux";
import { editList } from "../../../Store/actions/shots";

function Settings({ shots, editShotList, navigation }) {
  const [shotForm, setShotForm] = useState(shots);

  const handleLuckToggle = (type, idx, status) => {
    const updatedShot = {
      ...shotForm[type][idx],
      disabled: !status,
    };
    setShotForm({
      ...shotForm,
      [shotForm[type]]: [
        ...shotForm[type],
        (shotForm[type][idx] = updatedShot),
      ],
    });
  };
  
  const handleChangeLuck = (type, idx, currentLuck, tier) => {
    let newLuck = 1;
    if (tier == "onOff") {
      if (currentLuck != 0) {
        newLuck = 0;
      }
    } else if (tier == "low") {
      newLuck = 1;
    } else if (tier == "med") {
      newLuck = 2;
    } else if (tier == "high") {
      newLuck = 5;
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
          if (item.disabled == true) {
            currentLuck = "disabled";
          } else {
            if (item.luck == 1) {
              currentLuck = "low";
            } else if (item.luck == 2) {
              currentLuck = "med";
            } else if (item.luck == 5) {
              currentLuck = "high";
            }
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
                  isChecked={item.disabled ? false : true}
                  iconStyle={{ borderColor: "white" }}
                  value={1}
                  onPress={() => {
                    handleLuckToggle("discType", idx, item.disabled);
                  }}
                />
                <View style={styles.luckWrapper}>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("discType", idx, item.luck, "low");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "low"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      Low
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("discType", idx, item.luck, "med");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "med"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      Med
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("discType", idx, item.luck, "high");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "high"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      High
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        })}
        <Text style={[styles.titles, { paddingTop: 10 }]}>Shot Type:</Text>
        {shotForm.shotType.map((item, idx) => {
          let currentLuck = "";
          if (item.disabled == true) {
            currentLuck = "disabled";
          } else {
            if (item.luck == 1) {
              currentLuck = "low";
            } else if (item.luck == 2) {
              currentLuck = "med";
            } else if (item.luck == 5) {
              currentLuck = "high";
            }
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
                  isChecked={item.disabled ? false : true}
                  iconStyle={{ borderColor: "white" }}
                  onPress={() => {
                    handleLuckToggle("shotType", idx, item.disabled);
                  }}
                />
                <View style={styles.luckWrapper}>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("shotType", idx, item.luck, "low");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "low"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      Low
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("shotType", idx, item.luck, "med");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "med"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      Med
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={(item.disabled ? 1 : 0.2)}
                    onPress={() => {
                      if (item.disabled == false) {
                        handleChangeLuck("shotType", idx, item.luck, "high");
                      }
                    }}
                  >
                    <Text
                      style={
                        currentLuck == "high"
                          ? styles.luckText
                          : styles.disabledLuckText
                      }
                    >
                      High
                    </Text>
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
  disabledLuckText: {
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
