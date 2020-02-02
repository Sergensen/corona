import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { translate } from '../local';

export default class Privacy extends Component {
  render() {
      console.log(translate)
    return (
      <ScrollView style={styles.container}>
        <Text h3>{translate.privacyTitle}</Text>
        <Text style={styles.text}>{translate.privacyText1}</Text>
        <Text style={styles.text2}>{translate.privacyText2}</Text>
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
        height: 3.6*Dimensions.get('screen').height,
    },
    text2: {
        height: 4*Dimensions.get('screen').height,
    }
});
