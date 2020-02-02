import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { translate } from '../local';

export default class Symptoms extends Component {
      
    getElements() {
        let elements = [];
        const type = "symptom";
        for(let key = 0; key <10; key++) {
            elements.push(
                <View style={styles.elementContainer}>
                    <Text style={styles.text} >{"- " + translate[type+(key+1)]}</Text>
                </View>
            );
        }
        return elements;
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text h2>{translate.titleSymptoms}</Text>
        <Text style={styles.subTitle}>{translate.symptomText}</Text>
            {
                this.getElements()
            }
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../resources/images/tips/blue-3.png')}
            />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        width: "100%",
        padding: "5%",
        paddingTop: "2.5%",
        height: Dimensions.get('screen').height*0.9,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        paddingBottom: "20%"
    },
    text: {
        fontSize: 19
    },
    elementContainer: {
        marginLeft: 10
    },
    image: {
        width: Dimensions.get('screen').width*0.9,
        height: Dimensions.get('screen').width*0.9,
    }
});
