import React, {Component} from 'react'
import {ScrollView, StyleSheet, Dimensions} from 'react-native'
import {Text} from 'react-native-elements'
import {translate} from '../local'

export default class Legal extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text h2>{translate.legalTitle}</Text>
        <Text h4>{translate.legalText}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '5%',
    paddingTop: '2.5%',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
})
