import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { translate } from '../local';

export default class Legal extends Component {
render() {
    return (
      <ScrollView style={styles.container}>
        <Text h3>{translate.legalTitle}</Text>
        <Text style={styles.text}>{translate.legalText}</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('screen').height,
        padding: "5%",
        paddingTop: "2.5%"
    },
    text: {
        height: 2*Dimensions.get('screen').height,
    },
});
