import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, Button } from 'react-native';

export default class Symtoms extends Component {
  render() {
      const { goBack } = this.props;
      
    return (
      <ScrollView style={styles.container}>
        <Button title="Back" onPress={() => goBack()}  />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: Dimensions.get('screen').height,
        backgroundColor: "yellow"
    }
});
