import { getNowPlayData } from '../../../apis/query'
import CardCarousel from './CardSlide/CardCarousel'

const HomeCardGroup = () => {
  const res = getNowPlayData()
  const { data } = res
  const nowPlaying = data?.pages.flatMap((page) => page.results)

  return (
    <div>
      <div className="text-3xl font-bold py-10 pl-5">Now Playing</div>
      {nowPlaying && <CardCarousel content={nowPlaying} />}
      {/* <div className="text-3xl font-bold py-10 pl-5">Up Coming</div>
      {upComing && <CardCarousel content={upComing} />}
      <div className="text-3xl font-bold py-10 pl-5">Top Rated</div>
      {topRated && <CardCarousel content={topRated} />} */}
    </div>
  )
}

export default HomeCardGroup
