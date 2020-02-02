import React, {Component} from 'react'
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native'
import {Text, Image} from 'react-native-elements'
import {translate} from '../local'

export default class Tips extends Component {
  state = {
    english: [
      {
        title: 'Wash your hands',
        images: [
          require('../resources/images/tips/blue-1.png'),
          require('../resources/images/tips/blue-2.png'),
        ],
      },
      {
        title: 'Protect others from getting sick',
        images: [
          require('../resources/images/tips/blue-3.png'),
          require('../resources/images/tips/blue-4.png'),
        ],
      },
      {
        title: 'Food safety',
        images: [
          require('../resources/images/tips/blue-5.png'),
          require('../resources/images/tips/blue-6.png'),
          require('../resources/images/tips/blue-7.png'),
        ],
      },
      {
        title: 'Shopping & Working',
        images: [
          require('../resources/images/tips/blue-8.png'),
          require('../resources/images/tips/blue-9.png'),
          require('../resources/images/tips/blue-10.png'),
        ],
      },
      {
        title: 'Traveling',
        images: [
          require('../resources/images/tips/1.png'),
          require('../resources/images/tips/2.png'),
          require('../resources/images/tips/3.png'),
          require('../resources/images/tips/4.png'),
          require('../resources/images/tips/5.png'),
        ],
      },
    ],
    german: [],
  }
  render () {
    const {english, german} = this.state
    if (translate.english) {
      return (
        <ScrollView style={styles.container}>
          {english.map(section => (
            <View style={styles.section}>
              <Text h4>
                {section.title}
              </Text>
              {section.images.map(uri => (
                <View style={styles.imageContainer}>
                    <Image resizeMode="contain" style={styles.image} key={uri} source={uri} />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <Text h1>Tips</Text>
          <Text h4>Tips</Text>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
    section: {
    },
    imageContainer: {
        width: "100%",
        marginTop: 10
    },
    container: {
        width: '100%',
        padding: '5%',
        paddingTop: '2.5%',
        backgroundColor: 'rgba(255,255,255,0.75)'
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
