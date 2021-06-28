import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BG from "./BG";
import Constants from "../../../Constants";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76b6ef",
    borderBottomColor: "black",
    // paddingBottom: 150,
    // borderWidth: 10,
  },
  BGContainer: {
    flex: 3.5,
    justifyContent: "flex-end",
    // borderWidth: 1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 2,
  },
  authButtons: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    // elevation: 1,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    color: "white"
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  skipButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
    // borderWidth: 1,
    paddingRight: 65,
    paddingBottom: 35,
    width: Constants.MAX_WIDTH,
    // height: 100,
    flex: 1,
  },
  skipButton: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  skipButtonText: {},
});

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
     
      {/* <LinearGradient
        colors={["gray", "#76b6ef", "#C9CFF2", "#F2B8A2", "#F2A007"]}
        style={{
          position: "absolute",
          height: Constants.MAX_HEIGHT,
          width: Constants.MAX_WIDTH,
        }}
      />  */}
      <View style={styles.BGContainer}>

      <BG />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.authButtons}
          title="Sign In"
          onPress={() => alert("todo")}
        >
          <Text style={[styles.authButtonText,  {color: "white"} ]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authButtons}
          title="Create Account"
          onPress={() => navigation.push("CreateAccount")}
        >
          <Text style={[styles.authButtonText,  {color: "white"} ]}>Create Account</Text>
        </TouchableOpacity>
          </View>
        <View style={styles.skipButtonContainer}>
          <TouchableOpacity
            style={styles.skipButton}
            title="Skip"
            onPress={() => navigation.push("SlotsSelectorGame")}
          >
            <Text style={[styles.skipButtonText,  {color: "white"} ]}>Skip</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
// export const CreateAccount = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.appContainer}>
//       <Text>Create Account</Text>
//       <Button title="Sign Up" onPress={() => alert("todo")} />
//     </SafeAreaView>
//   );
// };
