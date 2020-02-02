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
        title: 'Shopping & Working in China',
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
    german: [
      {
        title: 'Hände waschen',
        text: 'Sie sollten Ihre Hände mindestens 30 Sekunden mit Seife und Wasser abwaschen. Gehen Sie sicher, dass Sie Ihre Hände richtig abtrocknen. Waschen Sie sie regelmäßig. Sie können auch ein Desinfektionsmittel benutzen.',
        image: require('../resources/images/tips/blue-1.png'),
      },
      {
        title: 'Andere schützen',
        text: 'Niesen und husten Sie nur in die Armbeuge und achten Sie darauf, dass sie Taschentücher nicht mehrmals benutzen. Wenn Sie typische Symptome verspüren und in letzter Zeit in China waren oder mit Personen in Kontakt waren, die vor kurzer Zeit in China waren, sollten Sie einen Arzt aufsuchen.',
        image: require('../resources/images/tips/blue-3.png'),
      },
      {
        title: 'Nahrungsmittel',
        text: 'Waschen Sie Geschirr, das mit rohem Fleisch in Kontakt war sofort ab. Behandeln Sie genau so Ihre Hände. Verzehren Sie kein Fleisch von Tieren, die an einer Krankheit gestorben sind. Verzehren Sie außerdem kein rohes Fleisch.',
        image: require('../resources/images/tips/blue-5.png'),
      },
      {
        title: 'Shoppen und arbeiten in China',
        text: 'Vermeiden Sie Kontakt mit Tieren und Menschen. Probieren Sie im besten Fall auch keine Kleidung an. Waschen Sie auch hier regelmäßig Ihre Hände und tragen Sie Handschuhe, wenn Sie sich in der Öffentlichkeit befinden.',
        image: require('../resources/images/tips/blue-8.png'),
      }
    ],
  }
  render () {
    const {english, german} = this.state
    if (translate.english) {
      return (
        <ScrollView style={styles.container}>
          {english.map(section => (
            <View style={styles.section}>
                          <Text h2 style={styles.titleText}>
                {translate.titleTips}
              </Text>
              <Text h4 style={styles.titleText}>
                {section.title}
              </Text>
              {section.images.map(uri => (
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode='cover'
                    style={styles.image}
                    key={uri}
                    source={uri}
                  />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          {german.map(section => (
            <View style={styles.section}>
              <Text h2 style={styles.titleText}>
                {translate.titleTips}
              </Text>

              <Text h3 style={styles.titleText}>
                {section.title}
              </Text>
              <Text style={styles.textText}>{section.text}</Text>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  style={styles.image}
                  key={section.image}
                  source={section.image}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      )
    }
  }
}

const imageSize = Dimensions.get('window').width * 0.9

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    // paddingTop: '2.5%',
    backgroundColor: 'rgba(255,255,255, 0.9)',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    paddingBottom: 10,
    width: "90%",
    marginLeft: 10,
    marginRight: 10
  },
  textText: {
      marginLeft: 20,
      marginRight: 20,
      fontSize: 19,
      marginBottom: 10
  },
  imageContainer: {
    paddingBottom: 20,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})
