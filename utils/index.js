// https://developers.zomato.com/api/v2.1/cities
// https://developers.zomato.com/api/v2.1/categories
// https://developers.zomato.com/api/v2.1/search?entity_id=84&entity_type=city&q=*RESTAURANT_URL*&category=7%2C9

import { API_KEY } from 'react-native-dotenv'

export function getCityIdAPI (lat, lon) {
    console.log(`https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`)
    return fetch(`https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

export function getCollectionsAPI(lat, lon) {
    return fetch(`https://developers.zomato.com/api/v2.1/collections?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

export function getRestaurantsAPI(city_id, restaurant) {
    console.log(`https://developers.zomato.com/api/v2.1/search?entity_type=city&entity_id=${city_id}&q=${restaurant}`)
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_type=city&entity_id=${city_id}&q=${restaurant}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

