import { createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from 'constants/clientConstants'
import { axiosWrappers } from 'helpers'

export const getWords = createAsyncThunk(
  'words/getWords',

  async (arg, { rejectWithValue }) => {
    console.log('`${URL1111', `${URL}/${arg.table}`)
    try {
      const response = await axiosWrappers.getAxios(`${URL}/${arg.table}`)
      console.log('response_getWords :>> ', response)
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
    // return fetch(`${URL}/${arg.table}`)
    //     .then((res) => {
    //         if (!res.ok) {
    //             return rejectWithValue([], 'api url not found from')
    //         }
    //         console.log('res.json() :>> ', res.json())
    //         console.log('res.data :>> ', res.data)
    //         // return res.json()
    //         return res.data
    //     })
    //     .catch((error) => {
    //         return rejectWithValue([], error)
    //     })
  },
)
