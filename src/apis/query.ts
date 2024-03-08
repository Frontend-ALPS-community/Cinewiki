import { useQuery } from '@tanstack/react-query'
import { Axios } from './@core'

const nowplay = '/now_playing'
const toprated = '/top_rated'
const upcoming = '/upcoming'

const AxiosGetNow = async () => {
  // eslint-disable-next-line no-return-await
  return await Axios.get(nowplay)
}

export const getNowPlayData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getNowPlay = useQuery({
    queryKey: ['nowplay'],
    queryFn: AxiosGetNow,
  })
  return getNowPlay
}
