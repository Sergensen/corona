import React, {Component} from 'react'
import {StyleSheet, Dimensions, View, BackHandler, Text} from 'react-native'
import {WebView} from 'react-native-webview'
export default class Web extends Component {
    state= {
        loading: true
    }
  componentDidMount () {
    if (this.backHandler) this.backHandler.remove()
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    )
  }

  componentWillUnmount () {
    if (this.backHandler) this.backHandler.remove()
  }

  handleBackPress = () => {
    this.webview.goBack()
  }

  render () {
    const {goBack, uri} = this.props;
    const { loading } = this.state;
    return (
      <View style={styles.container}>
      {loading && <Text style={styles.loading}>Loading...</Text>}
        <WebView onLoad={() => this.setState({loading: false})} ref={ref => (this.webview = ref)} source={{uri}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: Dimensions.get('window').height * 0.9 - 100,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  loading: {
      width: "100%",
      textAlign: "center",
      fontSize: 30,
      paddingTop: "20%",
      paddingBottom: "20%",
    height: Dimensions.get('window').height * 0.9,
    fontWeight: "bold"
  }
})
