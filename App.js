import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
 
import Constants from "./Constants";
import SlotsSelectorGame from "./app/Screens/ShotSelectorGame/SlotsSelectorGame";
import Landing from "./app/Screens/Landing/LandingPage";
import CreateAccount from "./app/Screens/Landing/CreateAccount";
const AuthStack = createStackNavigator();

export default function App() {
  return (
        // <SafeAreaView style={styles.appContainer}>
        //   <Landing />
        // </SafeAreaView>
    <NavigationContainer>
      <AuthStack.Navigator>
          <AuthStack.Screen name="Landing" component={Landing} options={{ title: "Sign In" }}/>
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Create Account" }}/>
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
