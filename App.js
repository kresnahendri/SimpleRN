import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInput from './src/components/users/UserInput'
import UserList from './src/components/users/UserList'
import UserDetail from './src/components/users/UserDetail'

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
    userNameInput: '',
    selectedUser: null
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
        <UserInput
          nameInput={this.state.userNameInput}
          onAddUser={this.handleOnAddUser}
        />
        <UserList
          users={this.state.users}
          onSelectUser={this.handleOnSelectUser}
        />
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
