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

