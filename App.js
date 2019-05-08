import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getCityIdAPI } from './utils'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: {
        id: null,
        flag: undefined,
        name: ''
      }
    }
  }
  componentDidMount () {
    // getCityIdAPI('delhi').then(city => {
    //   const { id, name, country_flag_url } = city.location_suggestions[0]
    //   this.setState(() => ({
    //     id, name, flag: country_flag_url
    //   }))
    // })
  }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
