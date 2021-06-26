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

import Constants from "../../../Constants";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT - 70,
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  authButtons: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    elevation: 8,
    backgroundColor: "#F2A007",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
      <LinearGradient
        colors={["#76b6ef", "#C9CFF2", "#F2B8A2", "#F2A007"]}
        style={{
          position: "absolute",
          height: Constants.MAX_HEIGHT,
          width: Constants.MAX_WIDTH,
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.authButtons}
          title="Sign In"
          onPress={() => alert("todo")}
        >
          <Text style={styles.authButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authButtons}
          title="Create Account"
          onPress={() => navigation.push("CreateAccount")}
        >
          <Text style={styles.authButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Skip"
        onPress={() => navigation.push("SlotsSelectorGame")}
      />
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
