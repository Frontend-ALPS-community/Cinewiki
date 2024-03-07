import { useQuery } from '@tanstack/react-query'
import { Axios } from './@core'

const nowplay = 'now_play'
const toprated = 'top_rated'
const upcoming = 'upcoming'

const AxiosGetNow = Axios.get(nowplay)
// eslint-disable-next-line react-hooks/rules-of-hooks
const getNowPlay = useQuery({
  queryKey: ['nowplay'],
  //   queryFn: AxiosGetNow,
})

export {}
