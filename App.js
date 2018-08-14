import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInput from './src/components/users/UserInput'
import UserList from './src/components/users/UserList'
import UserDetail from './src/components/users/UserDetail'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserDetail />
        <Text>Input User Detail</Text>
        <UserInput />
        <UserList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
