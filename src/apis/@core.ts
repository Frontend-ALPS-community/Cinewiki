import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
})
