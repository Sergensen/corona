import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  View,
} from 'react-native'
import {Button} from 'react-native-elements'
import Header from './Header'
import MainView from './MainView'
import HeaderImage from '../src/resources/images/HeaderBackgroundBlurry.png'
import BubbleImage from '../src/resources/images/Bubbles.png'
import {
  AdMobBanner
} from 'react-native-admob'


export default class App extends Component {
    state = {
        home: false
    }

    reset() {
        this.setState(prev => ({
            home: !prev.home
        }))
    }

  render () {
      const { home } = this.state;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <StatusBar hidden />
        <View style={styles.bubbleImageContainer}>
          <Image
            style={styles.headerImage}
            source={BubbleImage}
            resizeMode='contain'
          />
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            style={styles.headerImage}
            source={HeaderImage}
            resizeMode='cover'
          />
        </View>
        <SafeAreaView>
        
          <Header reset={this.reset.bind(this)} />          
          <MainView reset={this.reset.bind(this)} home={home} />
          <View style={styles.adContainer}>
            <AdMobBanner
            adSize="largeBanner"
            adUnitID="ca-app-pub-5033680827220523/5126214658"
            onAdFailedToLoad={error => console.error(error)}
            /> 
          </View>  
          
          
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bubbleImageContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  headerImageContainer: {
    // height: Dimensions.get('screen').height * 0.2,
    width: '100%',
    // justifyContent: "flex-end",
    alignItems: 'center',
    position: 'absolute',
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
  },
  adContainer:{
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
})

