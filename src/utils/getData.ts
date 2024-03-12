import { getNowPlayData, getTopratedData, getUpcomingData } from '../apis/query'

// eslint-disable-next-line consistent-return
export const getData = (type: string) => {
  let res
  if (type === 'nowplay') {
    res = getNowPlayData()
    return res?.data?.pages.flatMap((page) => page.results)
  }
  if (type === 'toprated') {
    res = getTopratedData()
    return res?.data?.pages.flatMap((page) => page.results)
  }
  if (type === 'upcoming') {
    res = getUpcomingData()
    return res?.data?.pages.flatMap((page) => page.results)
  }
}
