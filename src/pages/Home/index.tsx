import { getNowPlayData } from '../../apis/query'
import MovieCarousel from './components/MovieSlide/MovieCarousel'

const HomePage = () => {
  const nowPlaying = getNowPlayData()

  console.log('?', nowPlaying?.results)

  return (
    <>
      <div className="w-full flex flex-col m-auto justify-center  items-center">
        <div className="w-content ">
          <MovieCarousel />
        </div>
      </div>
      <div className="mt-7 border-b-4" />

      <div className="flex justify-center items-center p-4">
        <div className="w-content flex flex-col" />
      </div>
    </>
  )
}

export default HomePage
