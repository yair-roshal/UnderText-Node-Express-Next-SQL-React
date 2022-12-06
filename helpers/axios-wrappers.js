import axios from 'axios'

// axios
// .get(URL)
// .then((response) => {
//     setWords(response.data)
// })
// .catch((error) => {
//     console.log(error)
// })

function getAxios(url,callback) {
    return axios
        .get(url)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => alert('Something went wrong: ', err))
}

function postAxios(url, body) {
    return axios
        .post(url, body)
        .then((res) => {
            if (res.status === 200) {
                alert('Product successfully added to DB')
            } else Promise.reject()
        })
        .catch((err) => alert('Something went wrong: ', err))
}

function putAxios(url, body) {
    return axios
        .put(url, body)
        .then((res) => {
            if (res.status === 200) {
                alert('Product successfully added to DB')
            } else Promise.reject()
        })
        .catch((err) => alert('Something went wrong: ', err))
}

export const axiosWrappers = {
    getAxios,
    postAxios,
    putAxios,
}
