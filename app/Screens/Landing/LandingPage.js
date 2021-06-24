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


export const SignIn = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => alert("todo")} />
            <Button title="Create Account" onPress={() => alert("todo")} />
        </SafeAreaView>
    )
}