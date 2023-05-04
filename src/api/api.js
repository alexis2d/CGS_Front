// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Api(endpoint) {
//     const urlApi = 'http://localhost:8080/api/' + endpoint;
    


//     return axios.get(urlApi)
//     // .then(response => {
//     //     return response.data;
//     // })
//     // .catch(error => {
//     //   console.log(error);
//     // });
// }
// export default Api;

import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
});
export default {
    getData: (endpoint) =>
    instance({
        'method':'GET',
        'url': endpoint,
        'params': {
            'search':'parameter',
        },
    }),
    postData: (endpoint) =>
    instance({
        'method': 'POST',
        'url': endpoint,
        'data': {
            'item1':'data1',
            'item2':'item2'
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    })
}