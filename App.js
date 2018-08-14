import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInput from './src/components/users/UserInput'
import UserList from './src/components/users/UserList'

export default class App extends Component {
  state = {
    users: [
      { name: 'Falah' },
      { name: 'Wahyu' },
      { name: 'Heri' },
      { name: 'Asrul' },
      { name: 'Irma' },
      { name: 'Ahmad' },
      { name: 'Chandra' },
      { name: 'Mahesa' },
      { name: 'Idrus' }
    ],
    userNameInput: ''
  }

  handleOnChangeUserNameInput = (event) => {
    this.setState({ userNameInput: event })
  }

  handleOnAddUser = () => {
    const newUsers = [
      { name: this.state.userNameInput },
      ...this.state.users
    ]

    this.setState({
      users: newUsers,
      userNameInput: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Input User Detail</Text>
        <UserInput
          nameInput={this.state.userNameInput}
          onChangeTextInput={this.handleOnChangeUserNameInput}
          onAddUser={this.handleOnAddUser}
        />
        <UserList users={this.state.users} />
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
