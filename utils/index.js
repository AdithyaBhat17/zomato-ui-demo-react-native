// https://developers.zomato.com/api/v2.1/cities
// https://developers.zomato.com/api/v2.1/categories

import { API_KEY } from 'react-native-dotenv'

export function getCityIdAPI (city) {
    return fetch('https://developers.zomato.com/api/v2.1/cities?q=' + city, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

export function getCollectionsAPI(city_id) {
    console.log('https://developers.zomato.com/api/v2.1/collections?city_id=' + city_id)
    return fetch('https://developers.zomato.com/api/v2.1/collections?city_id=' + city_id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

