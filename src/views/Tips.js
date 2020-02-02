import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

export default class Tips extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text h1>Tips</Text>
        <Text h4>Tips</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: Dimensions.get('screen').height,
        padding: "5%",
        paddingTop: "2.5%"
    }
});
