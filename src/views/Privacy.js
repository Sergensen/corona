import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { translate } from '../local';

export default class Privacy extends Component {
    renderElements() {
        let counter = 0;
        let elements = [];
        while(counter < 18) {
            counter++;
            elements.push(<Text key={Math.random()*100} h4>{translate["privacyTitle"+counter]}</Text>)
            elements.push(<Text key={Math.random()*100} h4>{translate["privacyText"+counter]}</Text>)
        }
        return elements;
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text h1>Privacy</Text>
        <Text h4>Privacy</Text>
        {this.renderElements()}
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
