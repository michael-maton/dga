import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import Constants from '../../../Constants';

const styles = StyleSheet.create({
  appContainer: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76b6ef'
  }
});


export default function CreateAccount ({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
        <Button title = 'Create Account' onPress = {() => alert('Todo. Return to main screen and click \'Skip\' for now.')} />
    </SafeAreaView>
  )
}