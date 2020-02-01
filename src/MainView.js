import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  BackHandler,
} from 'react-native'
import {ListItem, Text, Button} from 'react-native-elements'

import Web from './views/Web';
import Tips from './views/Tips';
import Symptoms from './views/Symptoms';
import Legal from './views/Legal';
import Privacy from './views/Privacy';

export default class MainView extends Component {
  state = {
    contentId: 0,
    web: false,
    cards: [
        {
            contentId: 1, 
            component: <Web goBack={() => this.goBack()} key={0} id="news" uri="https://news.google.com/search?q=coronavirus" />
        }, {
            contentId: 2, 
            component: <Web goBack={() => this.goBack()} key={1} id="flights" uri="https://steemitimages.com/p/PB8ro82ZpZP1LwhMpNsM9QB2i14js7msiXzEBSZa8hiozvtW63jynMFXdEDznFjmAoQZXcgWTggyFtTxYPNkSJQvRRvJAtQgSscNQK1ZBAdtpMQM?format=match&mode=fit&width=640" />
        }, {
            contentId: 3, 
            component: <Web goBack={() => this.goBack()} key={2} id="infos" uri="https://de.wikipedia.org/wiki/Coronaviridae" />
        }, {
            contentId: 4, 
            component: <Web goBack={() => this.goBack()} key={3} id="livemap" uri="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61" />
        }, {
            contentId: 5, 
            component: <Tips goBack={() => this.goBack()} key={4} />,
        }, {
            contentId: 6, 
            component:  <Symptoms goBack={() => this.goBack()} key={5} />
        }, {
            contentId: 7, 
            component: <Legal goBack={() => this.goBack()} key={6} />,
        }, {
            contentId: 8, 
            component:  <Privacy goBack={() => this.goBack()} key={7} />
        }
    ]
  }

  componentDidMount () {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    )
  }

  componentWillUnmount () {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    if (this.state.contentId === 0) {
        BackHandler.exitApp();
    } else {
      this.setState({contentId: 0})
    }
    return true
  }

  goBack() {
      this.setState({contentId: 0})
  }

  render () {
    const {contentId, cards} = this.state;
    return contentId === 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
            {cards.map(({contentId}) => (
                <ListItem
                    key={contentId}
                    style={styles.card}
                    onPress={() => {
                        this.setState({contentId})
                    }}
                />
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
    backgroundColor: 'blue',
    paddingTop: '2.5%',
  },
  card: {
    backgroundColor: 'green',
    width: '90%',
    height: Dimensions.get('screen').height * 0.25,
    margin: '2.5% 5%',
  },
})
