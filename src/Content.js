import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, Button } from 'react-native';

export default class Content extends Component {
  render() {
      const { goBack, data } = this.props;
      const { web, url, contentId, title } = data;
      
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
