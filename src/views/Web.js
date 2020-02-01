import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import {WebView} from 'react-native-webview';
export default class Web extends Component {
  render() {
      const { goBack, uri } = this.props;
    return (
        <View style={styles.container}>
            <WebView
                source={{uri}}
            />
        </View>
        
    );
  }
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: Dimensions.get("window").height*0.9,
    }
});
