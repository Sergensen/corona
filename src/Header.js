import React, {Component} from 'react'
import {View, StyleSheet, Dimensions } from 'react-native'
import { Text, Button } from 'react-native-elements'

export default class Header extends Component {
  render () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Text</Text>
                <Button title="Icon" />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 0.1,
        backgroundColor: "red",
    },
    header: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "7.5%",
    }
})
