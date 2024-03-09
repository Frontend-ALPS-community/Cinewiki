import axios from 'axios'

const Token = process.env.REACT_APP_API_KEY

export const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
})
