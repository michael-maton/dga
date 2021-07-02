import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Constants from "../../../Constants";

export default function Home({ navigation }) {

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          title="ShotSelectorGame"
          onPress={() => navigation.push("ShotSelectorGame")}
        >
          <Text style={styles.cardTitle}>Choose your shot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Placeholder</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: Constants.MAX_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76b6ef",
    borderBottomColor: "black",
    // paddingTop: StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight - 20,
    position: "relative",
  },
  cardContainer: {
    width: Constants.MAX_WIDTH,
    alignItems: "center",
    shadowOffset: {width:10,height:10}
  },
  card: {
    borderWidth: 1,
    borderColor: "white",
    width: Constants.MAX_WIDTH - 20,
    height: Constants.MAX_HEIGHT / 4,
    borderRadius: 5,
    margin: 10,
    justifyContent: "flex-end",
    shadowColor: "black",
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    padding: 5,
  },
});
