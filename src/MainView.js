import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native'
import {ListItem, Text, Button} from 'react-native-elements'
import {translate} from './local'
import Web from './views/Web'
import Tips from './views/Tips'
import Symptoms from './views/Symptoms'
import Legal from './views/Legal'
import Privacy from './views/Privacy'
import image from '../src/resources/images/BlurryFlight.jpg'

export default class MainView extends Component {
  state = {
    contentId: 0,
    web: false,
    cards: [
      {
        contentId: 1,
        title: translate.titleTips,
        imageUrl: require('../src/resources/images/BlurryTips.jpg'),
        component: <Tips goBack={() => this.goBack()} key={0} />,
      },
      {
        contentId: 2,
        title: translate.titleNews,
        imageUrl: require('../src/resources/images/BlurryNews.jpg'),
        component: (
          <Web
            goBack={() => this.goBack()}
            key={1}
            id='news'
            uri='https://news.google.com/search?q=coronavirus'
          />
        ),
      },
      {
        contentId: 3,
        title: translate.titleMap,
        imageUrl: require('../src/resources/images/BlurryLiveMap.jpg'),
        component: (
          <Web
            goBack={() => this.goBack()}
            key={2}
            id='livemap'
            uri='https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61'
          />
        ),
      },
      {
        contentId: 4,
        title: translate.titleFlights,
        imageUrl: require('../src/resources/images/BlurryFlight.jpg'),
        component: (
          <Web
            goBack={() => this.goBack()}
            key={3}
            id='flights'
            uri='https://flightaware.com/live/findflight/'
          />
        ),
      },
      {
        contentId: 5,
        title: translate.titleInfo,
        imageUrl: require('../src/resources/images/BlurryWikipedia.jpg'),
        component: (
          <Web
            goBack={() => this.goBack()}
            key={4}
            id='infos'
            uri='https://de.wikipedia.org/wiki/Coronaviridae'
          />
        ),
      },
      {
        contentId: 6,
        title: translate.titleSymptoms,
        imageUrl: require('../src/resources/images/BlurrySymptoms.jpg'),
        component: <Symptoms goBack={() => this.goBack()} key={5} />,
      },
      {
        contentId: 7,
        title: translate.legalTitle,
        imageUrl: '',
        component: <Legal goBack={() => this.goBack()} key={6} />,
      },
      {
        contentId: 8,
        title: translate.privacyTitle,
        imageUrl: '',
        component: <Privacy goBack={() => this.goBack()} key={7} />,
      },
    ],
  }

  componentDidMount () {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    )
  }

  componentDidUpdate () {
    const {contentId} = this.state
    const {home, reset} = this.props
    
    if (home) {
      this.setState({contentId: 0})
      reset()
    }

    if (
      contentId === 2 ||
      contentId === 3 ||
      contentId === 4 ||
      contentId === 5
    ) {
      if (this.backHandler) this.backHandler.remove()
    } else {
      if (this.backHandler) this.backHandler.remove()
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        this.handleBackPress,
      )
    }
  }

  componentWillUnmount () {
    if (this.backHandler) this.backHandler.remove()
  }

  handleBackPress = () => {
    if (this.state.contentId === 0) {
      BackHandler.exitApp()
    } else {
      this.setState({contentId: 0})
    }
    return true
  }

  goBack () {
    this.setState({contentId: 0})
  }

  render () {
    const {contentId, cards} = this.state

    return contentId === 0 ? (
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map(({contentId, imageUrl, title}) => (
          <View key={contentId + title} style={styles.elementContainer}>
            <View
              // source={imageUrl}
              style={styles.imageBackgroundContainer}>
              <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={imageUrl} />
              </View>
              <ListItem
                Component={TouchableOpacity}
                key={contentId}
                style={styles.card}
                onPress={() => {
                  this.setState({contentId})
                }}
                title={title}
                titleStyle={styles.itemTitle}
                containerStyle={styles.containerStyle}
                contentContainerStyle={styles.contentContainerStyle}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    ) : (
      cards.find(card => card.contentId === contentId).component
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // display: 'flex',
    // height: ,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    paddingTop: '2.5%',
    // paddingBottom: "20%"
  },
  elementContainer: {
    width: '90%',
    height: Dimensions.get('screen').height * 0.125,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: 'yellow',
    elevation: 5,
  },
  imageBackgroundContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    // flex: 8,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    width: '80%',
    height: '100%',
    borderRadius: 15,
    elevation: 15,
    // height: "100%",
    // width: "100%",
    // margin: '2.5% 5%',
  },
  itemTitle: {
    // color: "white",
    // fontWeight: "bold",
    fontSize: 25,
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 1,
  },
  containerStyle: {
    backgroundColor: null,
    height: '100%',
    width: '100%',
    // backgroundColor: "green"
  },
  contentContainerStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: "green"
  },
  cardImageContainer: {
    // flex: 2,
    position: 'absolute',
    right: 0,
    width: '25%',
    height: '100%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
})
