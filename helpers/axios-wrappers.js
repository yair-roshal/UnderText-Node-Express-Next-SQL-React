import axios from 'axios'
// import { URL } from 'constants'

function getAxios(url, callback) {
    return axios
        .get(url)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => alert('Something went wrong (maybe you need restart server), error: ', err))
}

function postAxios(url, body, callback) {
    return axios
        .post(url, body)
        .then((res) => {
            if (res.status === 200) {
                callback(res.data)
                console.log('Product successfully added to DB')
            } else Promise.reject()
        })
        .catch((err) => alert('Something went wrong (maybe you need restart server), error: ', err))
}

function putAxios(url, body) {
    return axios
        .put(url, body)
        .then((res) => {
            if (res.status === 200) {
                console.log('Product successfully added to DB')
            } else Promise.reject()
        })
        .catch((err) => alert('Something went wrong (maybe you need restart server), error: ', err))
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
            alert('Something went wrong (maybe you need restart server), error: ' + err),
        )
}

export const axiosWrappers = {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios,
}
