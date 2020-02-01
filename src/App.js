import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native'
import {Button, ThemeProvider} from 'react-native-elements'
import Header from './Header'
import MainView from './MainView'

const App: () => React$Node = () => {
  const cards = [
      {
        contentId: 1,
        title: 'one',
        web: true,
        url: ""
      },
      {
        contentId: 2,
        title: 'two',
        web: true,
        url: ""
      },
      {
        contentId: 3,
        title: 'three',
        web: false,
      },
      {
        contentId: 4,
        title: 'four',
        web: false,
      },
    ];

  return (
    <ThemeProvider>
      <StatusBar hidden />
      <SafeAreaView>
        <Header />
        <MainView cards={cards} />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
