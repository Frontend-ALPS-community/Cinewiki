import { getNowPlayData } from '../../apis/query'
import OneCardImage from '../../components/Card/card'
import { resultsType } from '../../types/type'

export const arr = new Array(18).fill('카드')

const Nowplaying = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = getNowPlayData()
  console.log(data?.results)

  data?.results.map((el: resultsType) => console.log(el.video))
  return (
    <div className="bg-subColor-200 w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">NowPlaying</div>
      <div className="font-md text-md my-6">현재 상영하는 영화를 확인 할 수 있습니다.</div>
      <div className="flex flex-wrap mx-auto">
        {data?.results.map((info: resultsType) => (
          <OneCardImage info={info} />
        ))}
      </div>
    </div>
  )
}

export default Nowplaying
