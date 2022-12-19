import axios from 'axios'

const getAxios = (url) => {
     return axios
        .get(url)
        .then((res) => {
            return res.data
        })

        .catch((err) =>
            // alert('getAxios - Something went wrong (maybe you need restart server), error: ', err),
            console.log(
                'getAxios - Something went wrong (maybe you need restart server), error: ',
                err,
            ),
        )

    // .catch(function (error) {
    //     if (error.response) {
    //         // Request made and server responded
    //         console.log(error.response.data)
    //         console.log(error.response.status)
    //         console.log(error.response.headers)
    //     } else if (error.request) {
    //         // The request was made but no response was received
    //         console.log(error.request)
    //     } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log('Error', error.message)
    //     }
    // })
}

function postAxios(url, body) {
    return axios
        .post(url, body)
        .then((res) => {
            if (res.status === 200) {
                console.log(`${body.original} successfully added to DB`)
                return res.data
            } else Promise.reject()
        })
        .catch((err) =>
            // alert('postAxios - Something went wrong (maybe you need restart server), error: ', err),
            console.log(
                'postAxios - Something went wrong (maybe you need restart server), error: ',
                err,
            ),
        )
}

function putAxios(url, body) {
    return axios
        .put(url, body)
        .then((res) => {
            if (res.status === 200) {
                alert('Word successfully updated')
                // console.log('Word successfully updated')
            } else Promise.reject()
        })
        .catch(
            (err) =>
                console.log(
                    'putAxios - Something went wrong (maybe you need restart server), error: ',
                    err,
                ),
            // alert('putAxios - Something went wrong (maybe you need restart server), error: ', err),
        )
}

function deleteAxios(url, id) {
    return axios
        .delete(url + id)
        .then((res) => {
            if (res.status === 200) {
                console.log('Word successfully deleted')
                // alert('Word successfully deleted')
                window.location.reload()
            } else Promise.reject()
        })
        .catch(
            (err) =>
                console.log(
                    'deleteAxios - Something went wrong (maybe you need restart server), error: ' +
                        err,
                ),
            // alert(
            //     'deleteAxios - Something went wrong (maybe you need restart server), error: ' + err,
            // ),
        )
}

function deleteAllAxios(url) {
    console.log('url :>> ', url)
    return axios
        .delete(url)
        .then((res) => {
            if (res.status === 200) {
                console.log('Word successfully deleted')
                // alert('Word successfully deleted')
                // window.location.reload()
            } else Promise.reject()
        })
        .catch((err) =>
            console.log(
                'deleteAxios - Something went wrong (maybe you need restart server), error: ' + err,
            ),
        )
}

export const axiosWrappers = {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios,
    deleteAllAxios,
}
