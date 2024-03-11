import { getNowPlayData, getTopratedData } from '../../../apis/query'
import CardCarousel from './CardSlide/CardCarousel'

const HomeCardGroup = () => {
  const res = getNowPlayData()
  const { data: nowPlayingdata } = res
  const nowPlaying = nowPlayingdata?.pages.flatMap((page) => page.results)

  return (
    <div>
      <div className="text-big font-bold mt-[50px] ml-5">Now Playing</div>
      {nowPlaying && <CardCarousel content={nowPlaying} />}
      <div className="text-big font-bold mt-[50px] ml-5">Up Coming</div>
      {/* {upComing && <CardCarousel content={upComing} />} */}
      <div className="text-big font-bold mt-[50px] ml-5">Top Rated</div>
      {/* {topRated && <CardCarousel content={topRated} />} */}
    </div>
  )
}

export default HomeCardGroup
