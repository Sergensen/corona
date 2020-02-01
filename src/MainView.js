import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  BackHandler,
} from 'react-native'
import Content from './Content'
import {ListItem, Text, Button} from 'react-native-elements'

export default class MainView extends Component {
  state = {
    contentId: 0,
    web: false
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
    const {contentId, web, url, title} = this.state;
    const {cards} = this.props;

    return contentId === 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
            {cards.map(({contentId, web, url, title}) => (
                <ListItem
                    key={contentId}
                    style={styles.card}
                    onPress={() => {
                        this.setState({contentId, web, url, title})
                    }}
                />
            ))}
        </ScrollView>
    ) : <Content goBack={this.goBack.bind(this)} data={contentId, web, url, title} />;
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
