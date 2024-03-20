import { Axios } from './@core'

const nowplay = '/movie/now_playing'
const toprated = '/movie/top_rated'
const upcoming = '/movie/upcoming'
const search = '/search/movie'
const detail = '/movie'

const AxiosGetNow = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(nowplay, {
    params: {
      page: params,
    },
  })
  return res.data
}
const AxiosGetToprated = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(toprated, {
    params: {
      page: params,
    },
  })
  return res.data
}
const AxiosGetUpcoming = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(upcoming, {
    params: {
      page: params,
    },
  })
  return res.data
}

const AxiosGetSearch = async (word: string | undefined, page: number) => {
  const res = await Axios.get(search, {
    params: { query: word, page },
  })
  return res.data
}

const AxiosGetDetail = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}`)

  return res.data
}

const AxiosGetImages = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}/images`)

  return res.data
}

const AxiosGetMovieVideos = async (movieId: number, language = 'en-US') => {
  const res = await Axios.get(`/movie/${movieId}/videos`, {
    params: {
      language,
    },
  })
  return res.data
}

const AxiosGetMovieCredits = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}/credits`)

  return res.data
}

export {
  AxiosGetDetail,
  AxiosGetImages,
  AxiosGetMovieCredits,
  AxiosGetMovieVideos,
  AxiosGetNow,
  AxiosGetSearch,
  AxiosGetToprated,
  AxiosGetUpcoming,
}
