import HomeCardGroup from './components/HomeCardGroup/homeCardGroup'
import MovieCarousel from './components/MovieSlide/MovieCarousel'

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col m-auto justify-center items-center bg-gray-100">
        <div className="">
          <MovieCarousel />
        </div>
      </div>
      <div className="mt-7 border-b-4" />

      <div className="flex justify-center items-center p-4">
        <div className="w-content flex flex-col">
          <HomeCardGroup />
        </div>
      </div>
    </>
  )
}

export default HomePage
