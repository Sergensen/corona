import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  View
} from 'react-native'
import {Button, ThemeProvider} from 'react-native-elements'
import Header from './Header'
import MainView from './MainView'
import HeaderImage from "../src/resources/images/HeaderBackgroundBlurry.png"

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <StatusBar hidden />
      <View style={styles.headerImageContainer}>
        <Image style={styles.headerImage} source={HeaderImage} resizeMode="cover"/>
      </View>
      <SafeAreaView>
        <Header />
        <MainView />
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
    headerImageContainer:{
      // height: Dimensions.get('screen').height * 0.2,
      width: "100%",
      // justifyContent: "flex-end",
      alignItems: "center",
      position: "absolute",
    },
    headerImage: {
        // bottom: 0,
        // width: "100%",
        // height: "100%",
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        // marginLeft: "7.5%",
    }
})

export default App
