// https://developers.zomato.com/api/v2.1/cities
// https://developers.zomato.com/api/v2.1/categories

import { API_KEY } from 'react-native-dotenv'

// export function getCityIdAPI (lat, lon) {
//     console.log(`https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`)
//     return fetch(`https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'user-key': API_KEY
//         }
//     })
//     .then(response => response.json())
// }

export function getCollectionsAPI(lat, lon) {
    console.log(`https://developers.zomato.com/api/v2.1/collections?lat=${lat}&lon=${lon}`)
    return fetch(`https://developers.zomato.com/api/v2.1/collections?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
}

