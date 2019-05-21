import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, Dimensions } from 'react-native'
import { getRestaurantsAPI, getCityIdAPI } from '../utils';

export default class Restaurants extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
            search: '',
            id: undefined,
            restaurants: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => getCityIdAPI(position.coords.latitude, position.coords.longitude)
                        .then(data => console.log(data.location_suggestions[0].id) || this.setState({id: data.location_suggestions[0].id}))
        )
    }

    searchRestaurants = (restaurant) => {
        const {id} = this.state
        if(restaurant.trim().length === 0)
            return alert('Please enter a valid restaurant name!')
        id && getRestaurantsAPI(id, restaurant)
        .then(data => this.setState({restaurants: data.restaurants}))        
    }

    render() {
        const { search } = this.state
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.search}
                    onChangeText={(search) => this.setState({search})}
                    placeholder='🔎 for restaurants and hit enter...'
                    onSubmitEditing={() => this.searchRestaurants(search)}
                />
                <View style={styles.imageView}>
                    { search.trim().length === 0 && 
                    <Image style={styles.image}
                     resizeMode='contain' 
                     source={require('../assets/restaurants.png')} 
                    />} 
                </View>
            </View>
        )
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    search: {
        marginTop: 20,
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10
    },
    image: {
        width: width,
        height: height * 0.8,
    },  
    imageView: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center'
    }
})