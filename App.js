import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
 
import Constants from "./Constants";
import SlotsSelectorGame from "./app/Screens/ShotSelectorGame/SlotsSelectorGame";
import {SignIn} from "./app/Screens/Landing/LandingPage";
const AuthStack = createStackNavigator();

export default function App() {
  return (
        // <SafeAreaView style={styles.appContainer}>
        //   <SignIn />
        // </SafeAreaView>
    <NavigationContainer>
      <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} style={styles.appContainer}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76b6ef",
  },
});
