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
        'content-type': 'application/json',
    },
});
export default {
    getData: (endpoint) =>
        instance({
            'method': 'GET',
            'url': endpoint,
            // 'params': {
            //     'search': 'parameter',
            // },
        }),
    postData: (endpoint, data) =>
        instance({
            'method': 'POST',
            'url': endpoint,
            'data': data,
            'headers': {
                'content-type': 'application/json'  // override instance defaults
            }
        }),
    putData: (endpoint, data) =>
        instance({
            'method': 'PUT',
            'url': endpoint,
            'data': data,
            'headers': {
                'content-type': 'application/json'  // override instance defaults
            }
        }),
    deleteData: (endpoint) =>
        instance({
            'method': 'DELETE',
            'url': endpoint,
        }),
}