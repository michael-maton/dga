import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from '../../../../Constants';

export default class RecentList extends Component {
  constructor(props) {
    super(props);
    this.recentSpins = this.props.route.params.recentSpins;
    this.discTypes = [];
    this.shotTypes = [];
    this.noRecentShots = true;
  }

  generateLists = () => {
    if (this.recentSpins.length != 0) {
      this.noRecentShots = false;
      this.recentSpins.slice(0,20).forEach((spin, idx) => (
        idx % 2 !== 0 ? this.discTypes = [...this.discTypes, spin] : this.shotTypes = [...this.shotTypes, spin]
      ));
    }
  }

  render() {
    this.generateLists();
    return (
      <SafeAreaView style = {styles.listWrapper}>
        {this.noRecentShots === true ?
          <Text style = {styles.noRecents}>No recent shots</Text>
          : 
          <View style = {styles.listContainer}>
            <View style = {styles.discType}>
              {this.discTypes.map((spin, idx) => (
                <Text style = { idx === 0 ? styles.shotTextBig : styles.shotText } key = {idx}>{spin}</Text>
              ))}
            </View>          
            <View style={styles.shotType}>
              {this.shotTypes.map((spin, idx) => (
                <Text style = { idx === 0 ? styles.shotTextBig : styles.shotText } key = {idx}>{spin}</Text>
                ))}
            </View> 
          </View>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    height: Constants.MAX_HEIGHT,
    width: Constants.MAX_WIDTH,
    alignItems: 'center',
    backgroundColor: '#76b6ef'
  },
  noRecents: {
    color: 'white',
    fontSize: 20,
    paddingTop: 200
  },
  listContainer: {
    height: Constants.MAX_HEIGHT/1.5,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  discType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76b6ef'
  },
  shotType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76b6ef'
  },
  shotText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    width: (Constants.MAX_WIDTH / 2) - 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  shotTextBig: {
    textAlign: 'center',
    width: (Constants.MAX_WIDTH / 2.3),
    color: 'white',
    fontSize: 19,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    margin: 5,
    borderColor: 'white',
    borderWidth: 1
  }
});
