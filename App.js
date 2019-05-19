import React from 'react'
import { View, StatusBar } from 'react-native'
import Collections from './components/Collections'
import { Constants } from 'expo'

export default class App extends React.Component {
  render() {
      return (
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='black' barStyle="light-content" />
          </View>
          <Collections/>
        </View>
      )
  }
}