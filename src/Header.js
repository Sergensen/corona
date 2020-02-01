import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        width: 500,
        height: 500,
        backgroundColor: "red"
    }
});
