import axios from 'axios'

const Token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTJkZjRhNGQzYWRkODI4NjQ5NjkyYTNiMjJhOTU5NCIsInN1YiI6IjY0MTk4MzdjMzEwMzI1MDBlOGEzNDQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nwV-KD4Ndh7lsGYn5BqmbUvtbks-85GeIS0_zpE1aXE'

export const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization: `Bearer ${Token}`,
  },
})
