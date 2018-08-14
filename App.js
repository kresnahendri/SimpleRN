import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInput from './src/components/users/UserInput'
import UserList from './src/components/users/UserList'
import UserDetail from './src/components/users/UserDetail'

export default class App extends Component {
  state = {
    selectedUser: null
  }

  handleOnSelectUser = (user) => {
    this.setState({
      selectedUser: user
    })
  }

  handleOnDeleteUser = (selectedUser) => {
    newUsers = this.state.users.filter((user) => {
      return user.name !== selectedUser.name
    })

    this.setState({
      users: newUsers,
      selectedUser: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <UserDetail
          selectedUser={this.state.selectedUser}
          onCancel={() => this.handleOnSelectUser(null)}
          onDelete={this.handleOnDeleteUser}
        />
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
