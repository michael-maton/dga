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
      <ScrollView contentContainerStyle={styles.checkboxes}>
        <Text style={styles.titles}>Disc Type:</Text>
        {shotForm.discType.map((item, idx) => {
          return (
            <BouncyCheckbox
              key={idx}
              size={30}
              style={{ paddingBottom: 10, marginLeft: 40, width: 200 }}
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
          );
        })}
        <Text style={styles.titles}>Shot Type:</Text>
        {shotForm.shotType.map((item, idx) => {
          return (
            <BouncyCheckbox
              key={idx}
              size={30}
              style={{ paddingBottom: 10, marginLeft: 40, width: 200 }}
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
          );
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
  checkboxes: {
    paddingTop: 10,
    color: "white",
    backgroundColor: "#76b6ef",
  },
  titles: {
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  saveButton: {
    width: Constants.MAX_WIDTH,
    justifyContent: "center",
    alignItems: "center",
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
