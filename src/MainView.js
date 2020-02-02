import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  BackHandler,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { ListItem, Text, Button } from 'react-native-elements'

import Web from './views/Web';
import Tips from './views/Tips';
import Symptoms from './views/Symptoms';
import Legal from './views/Legal';
import Privacy from './views/Privacy';
import image from "../src/resources/images/BlurryFlight.jpg"

export default class MainView extends Component {
  state = {
    contentId: 0,
    web: false,
    cards: [
      {
        contentId: 1,
        title: "Live News",
        imageUrl: require("../src/resources/images/BlurryNews2.jpg"),
        component: <Web goBack={() => this.goBack()} key={0} id="news" uri="https://news.google.com/search?q=coronavirus" />
      }, {
        contentId: 2,
        title: "Flight Cancalation",        
        imageUrl: require("../src/resources/images/BlurryFlight.jpg"),
        component: <Web goBack={() => this.goBack()} key={1} id="flights" uri="https://flightaware.com/live/findflight/" />
      }, {
        contentId: 3,
        title: "a",
        imageUrl: require("../src/resources/images/BlurryWikipedia.jpg"),
        component: <Web goBack={() => this.goBack()} key={2} id="infos" uri="https://de.wikipedia.org/wiki/Coronaviridae" />
      }, {
        contentId: 4,
        title: "a",
        imageUrl: require("../src/resources/images/BlurryLiveMap.jpg"),
        component: <Web goBack={() => this.goBack()} key={3} id="livemap" uri="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61" />
      }, {
        contentId: 5,
        title: "a",
        imageUrl: require("../src/resources/images/BlurryTips.jpg"),
        component: <Tips goBack={() => this.goBack()} key={4} />,
      }, {
        contentId: 6,
        title: "a",
        imageUrl: require("../src/resources/images/BlurrySymptoms2.jpg"),
        component: <Symptoms goBack={() => this.goBack()} key={5} />
      }, {
        contentId: 7,
        title: "a",
        imageUrl: "",
        component: <Legal goBack={() => this.goBack()} key={6} />,
      }, {
        contentId: 8,
        title: "a",
        imageUrl: "",
        component: <Privacy goBack={() => this.goBack()} key={7} />
      }
    ]
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    )
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    if (this.state.contentId === 0) {
      BackHandler.exitApp();
    } else {
      this.setState({ contentId: 0 })
    }
    return true
  }

  goBack() {
      this.setState({contentId: 0})
  }

  render() {
    const { contentId, cards } = this.state;
    return contentId === 0 ? (
      <ScrollView contentContainerStyle={styles.container} >
        {cards.map(({ contentId, imageUrl, title }) => (
          <View style={styles.elementContainer}>
          <ImageBackground 
          // source={{uri: "" + imageUrl}} 
          source={imageUrl} 
          style={styles.imageBackgroundContainer} resizeMode="cover">
            <ListItem
              Component={TouchableOpacity}
              key={contentId}
              style={styles.card}
              onPress={() => {
                this.setState({ contentId })
              }}
              title={title}
              titleStyle={styles.itemTitle}
              // subtitle={"l.subtitle"}
              containerStyle= {styles.containerStyle}
              contentContainerStyle={styles.contentContainerStyle}


            />
          </ImageBackground>
          </View>
        ))}
      </ScrollView>
    ) : cards.find(card => card.contentId === contentId).component;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    paddingTop: '2.5%',
    // paddingBottom: "20%"
  },
  elementContainer:{
    width: "90%", 
    height: Dimensions.get('screen').height * 0.175,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    overflow: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "yellow",   
  },
  imageBackgroundContainer:{
    width: "100%", 
    height: "100%",
    
  },
  card: {
    // backgroundColor: 'green',
    // width: '90%',
    height: "100%",
    width: "100%",
    // margin: '2.5% 5%',
  },
  itemTitle:{
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  },
  containerStyle:{
    backgroundColor: null,
    height: "100%", 
    width: "100%"
  },
  contentContainerStyle:{
    height: "100%", 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center"
  },
  
})
