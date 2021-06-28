import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
 
import Constants from "./Constants";
import Landing from "./app/Screens/Landing/LandingPage";
import CreateAccount from "./app/Screens/Landing/CreateAccount";
import SlotsSelectorGame from "./app/Screens/ShotSelectorGame/SlotsSelectorGame";
import RecentList from "./app/Screens/ShotSelectorGame/components/RecentList";
const AuthStack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'rgb(242, 242, 242)',
    card: '#76b6ef',
    text: 'white',
    border: '#76b6ef',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
        // <SafeAreaView style={styles.appContainer}>
        //   <Landing />
        // </SafeAreaView>
    <NavigationContainer theme={MyTheme}>
      <AuthStack.Navigator>
          <AuthStack.Screen name="Landing" component={Landing} options={{ title: "" }}/>
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Create Account" }}/>
          <AuthStack.Screen name="SlotsSelectorGame" component={SlotsSelectorGame} options={{ title: "Shot Selector" }}/>
          <AuthStack.Screen name="RecentList" component={RecentList} options={{ title: "Recent Shots" }}/>
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
