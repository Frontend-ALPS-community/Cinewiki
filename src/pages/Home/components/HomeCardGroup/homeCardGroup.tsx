import { getData } from '../../../../utils/getData'
import CardCarousel from './CardSlide/CardCarousel'

const HomeCardGroup = () => {
  const nowPlaying = getData('nowplay')
  const topRated = getData('toprated')
  const upComing = getData('upcoming')
  return (
    <div>
      <div className="text-big font-bold mt-[50px] ml-5">Now Playing</div>
      {nowPlaying && <CardCarousel content={nowPlaying} />}
      <div className="text-big font-bold mt-[50px] ml-5">Up Coming</div>
      {upComing && <CardCarousel content={upComing} />}
      <div className="text-big font-bold mt-[50px] ml-5">Top Rated</div>
      {topRated && <CardCarousel content={topRated} />}
    </div>
  )
}

export default HomeCardGroup
