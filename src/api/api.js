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
        }),
    postData: (endpoint, data) =>
        instance({
            'method': 'POST',
            'url': endpoint,
            'data': data,
            'headers': {
                'content-type': 'application/json'
            }
        }),
    putData: (endpoint, data) =>
        instance({
            'method': 'PUT',
            'url': endpoint,
            'data': data,
            'headers': {
                'content-type': 'application/json'
            }
        }),
    deleteData: (endpoint) =>
        instance({
            'method': 'DELETE',
            'url': endpoint,
        }),
}