import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api(endpoint) {
    const urlApi = 'http://localhost:8080/api/' + endpoint;
    


    return axios.get(urlApi)
    .then(response => {
        console.log(response.data)
        return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
export default Api;