import { useQuery } from '@tanstack/react-query'
import { Axios } from './@core'

const nowplay = '/now_playing'
const toprated = '/top_rated'
const upcoming = '/upcoming'

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
