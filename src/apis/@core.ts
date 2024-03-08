import axios from 'axios'

const Token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzRhNDEyNTk2ZGI1ZDQ0NmE3MTE5ZjhmNGRlNmRmYyIsInN1YiI6IjY0MTk4MzdjMzEwMzI1MDBlOGEzNDQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.410UuidiIJoN0a-o1azpdLnNfmWsU-dPksRE50fpbUA'

export const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization: `Bearer ${Token}`,
  },
})
