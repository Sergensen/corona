import React, {Component} from 'react'
import {View, StyleSheet, Dimensions } from 'react-native'
import { Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Header extends Component {
  render () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Coronavirus</Text>
                <Icon.Button style={styles.menuButton} iconStyle={{marginRight: 3, margin: 3}} name="menu" onPress={() => console.log("pressed this shit harder than sharting")}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 0.1,
        backgroundColor: "#ec5554",
        // borderColor: "#df3f3e",
        // borderBottomWidth: 3,
        elevation: 4, 
        justifyContent: "center",       
        alignItems: "center",
    },
    header: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // left: 20,
    },
    headerText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
    menuButton:{
        backgroundColor: "#d02724",
        // display: "flex",
    }
})
