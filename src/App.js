import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';

import Header from './Header';
import MainView from './MainView';

import { Button, ThemeProvider } from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ThemeProvider>
          <Header style={styles.header} />
          <MainView style={styles.mainView} />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('screen').height * 0.1
  },
  mainView: {
    height: Dimensions.get('screen').height * 0.9
  }
});

export default App;
