import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getNowPlayData } from '../../apis/query'
import OneCardImage from '../../components/Card/card'
import { resultsType } from '../../types/type'

export const arr = new Array(18).fill('카드')

const Nowplaying = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = getNowPlayData()
  const { data } = res
  const [ref, inView] = useInView()

  useEffect(() => {
    // eslint-disable-next-line no-empty
    if (!inView) {
    }
    res.fetchNextPage()
  }, [inView])

  return (
    <div className="w-content w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">NowPlaying</div>
      <div className="font-md text-md my-6">현재 상영하는 영화를 확인 할 수 있습니다.</div>
      <div className="flex flex-wrap gap-3 mx-auto">
        {data?.pages.map((page) => page.results.map((info: resultsType) => <OneCardImage info={info} />))}
      </div>
      <div ref={ref} />
    </div>
  )
}

export default Nowplaying
