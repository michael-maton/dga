import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import Constants from "../../../Constants";

const styles = StyleSheet.create({
    appContainer: {
      height: Constants.MAX_HEIGHT,
      width: Constants.MAX_WIDTH,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#76b6ef",
    },
  });


export default function CreateAccount ({ navigation }) {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Text>Create Account</Text>
            <Button title="Sign Up" onPress={() => alert("todo")} />
        </SafeAreaView>
    )
}