import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import Constants from "../../../Constants";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },
});

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <Text>Sign In Screen</Text> */}
      <Button title="Sign In" onPress={() => alert("todo")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
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
