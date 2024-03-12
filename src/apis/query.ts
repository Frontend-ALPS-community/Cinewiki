import { useQuery } from '@tanstack/react-query'
import { Axios } from './@core'

const nowplay = '/movie/now_playing'
const toprated = '/movie/top_rated'
const upcoming = '/movie/upcoming'
const search = '/search/movie'

export const AxiosGetNow = async () => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(nowplay)
  return res.data
}
const AxiosGetToprated = async () => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(toprated)
  return res.data
}
const AxiosGetUpcoming = async () => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(upcoming)
  return res.data
}

const AxiosGetSearch = async (queryKey: string[], word: string, page: number) => {
  const res = await Axios.get(search, {
    params: { query: word, page },
  })
  return res.data
}

export const getNowPlayData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: ['nowplay'],
    queryFn: AxiosGetNow,
  })
  return data
}
export const getTopratedData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: ['toprated'],
    queryFn: AxiosGetToprated,
  })
  return data
}
export const getUpcomingData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: ['upcoming'],
    queryFn: AxiosGetUpcoming,
  })
  return data
}

export const useSearchMovies = (word: string, page: number) => {
  // 검색 키워드를 인수로 받음
  const { data, isLoading, error } = useQuery({
    queryKey: ['search'],
    queryFn: () => AxiosGetSearch(['search'], word, page),
  })

  return { data, isLoading, error }
}
