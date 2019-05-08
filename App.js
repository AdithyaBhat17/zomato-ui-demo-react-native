import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, View, StatusBar } from 'react-native'
import { getCityIdAPI } from './utils'
import Collections from './components/Collections'
import { Constants } from 'expo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: {
        id: null,
        flag: undefined,
        name: ''
      },
      city_input: '',
      showCollections: false,
    }
  }

  getCityId = () => {
    const { city_input } = this.state
    city_input.trim().length !== 0 ? getCityIdAPI(city_input).then(city => {
      if(city.location_suggestions.length !== 0) {
        const { id, name, country_flag_url } = city.location_suggestions[0]
        this.setState({
          city: {id, name, flag: country_flag_url},
          showCollections: true
        })
       } else 
        alert('Something went wrong! Please try again with a valid city name') 
    }) : alert('Please enter a valid city name')
  }

  render() {
    const { city_input, city, showCollections } = this.state 
    if(showCollections) 
      return (
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='black' barStyle="light-content" />
          </View>
          <Collections city={city}/>
        </View>
      )
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>Enter a city name</Text>
        <TextInput 
         value={city_input}
         style={styles.input}
         onChangeText={(city_input) => console.log(city_input) || this.setState({city_input})}
         />
        <TouchableOpacity
         style={styles.button}
         onPress={this.getCityId}
        >
          <Text style={{color: '#fff'}}>Get Started</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  header: {
    fontSize: 24,
    fontWeight: "500"
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    borderColor: '#000',
    padding: 10
  },
  button: {
    marginTop: 10,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 0.4 },
    shadowOpacity: 0.8,
    backgroundColor: '#000',
    color: '#fff',
    padding: 10
  }
})
