import axios from 'axios'
// import { URL } from 'constants'

function getAxios(url, callback) {
    return axios
        .get(url)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) =>
            alert('getAxios - Something went wrong (maybe you need restart server), error: ', err),
        )
}

function postAxios(url, body, callback) {
    return axios
        .post(url, body)
        .then((res) => {
            if (res.status === 200) {
                callback(res.data)
                console.log('Word successfully added to DB')
            } else Promise.reject()
        })
        .catch(function (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request)
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
            }
        })
}

function putAxios(url, body) {
    return axios
        .put(url, body)
        .then((res) => {
            if (res.status === 200) {
                console.log('Word successfully added to DB')
            } else Promise.reject()
        })
        .catch((err) =>
            alert('putAxios - Something went wrong (maybe you need restart server), error: ', err),
        )
}

function deleteAxios(url, id) {
    return axios
        .delete(url + id)
        .then((res) => {
            if (res.status === 200) {
                alert('Word successfully deleted')
                window.location.reload()
            } else Promise.reject()
        })
        .catch((err) =>
            alert(
                'deleteAxios - Something went wrong (maybe you need restart server), error: ' + err,
            ),
        )
}

export const axiosWrappers = {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios,
}
