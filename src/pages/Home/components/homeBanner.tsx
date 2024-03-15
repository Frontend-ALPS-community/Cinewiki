import MovieCarousel from './MovieSlide/MovieCarousel'
import { getNowPlayData } from '../../../apis/query'

const HomeBanner = () => {
  const res = getNowPlayData()
  const { data } = res

  const images = data?.pages.flatMap((page) => page.results)

  return (
    <div>
      <MovieCarousel images={images} />
    </div>
  )
}

export default HomeBanner
