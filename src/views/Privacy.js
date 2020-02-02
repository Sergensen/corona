import React, {Component} from 'react'
import {ScrollView, StyleSheet, Dimensions} from 'react-native'
import {Text, TextInput} from 'react-native-elements'
import {translate} from '../local'

export default class Privacy extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text h2>{translate.privacyTitle}</Text>
        <Text h4>{translate.privacyText.substring(0, 5000)}</Text>
        <Text h4>{translate.privacyText.substring(5000, 10000)}</Text>
        <Text h4>{translate.privacyText.substring(10000, 15000)}</Text>
        <Text h4>{translate.privacyText.substring(15000, 20000)}</Text>
        <Text h4>{translate.privacyText.substring(20000, 25000)}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '5%',
    paddingTop: '2.5%',
    paddingBottom: '20%',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
})
