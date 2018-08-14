import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import UserInput from './src/components/users/UserInput'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Input User Detail</Text>
        <UserInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
