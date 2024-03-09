import CardCarousel from './components/CardSlide/CardCarousel'
import MovieCarousel from './components/MovieSlide/MovieCarousel'

export interface mergedItem {
  list: string
  photo: string
}

// 더미
const content: mergedItem[] = [
  {
    list: 'test1',
    photo: 'dog.jpg',
  },
  {
    list: 'test1',
    photo: 'cat.jpg',
  },
  {
    list: 'test1',
    photo: 'rabbit.jpg',
  },
  {
    list: 'test1',
    photo: 'fish.jpg',
  },
]
const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col m-auto justify-center  items-center">
        <div className="w-content ">
          <MovieCarousel />
        </div>
      </div>
      <div className="mt-7 border-b-4" />

      <div className="flex justify-center items-center p-4">
        <div className="w-content flex flex-col">
          <div className="text-3xl font-bold py-10 pl-5">Now Playing</div>
          <CardCarousel content={content} />
          <div className="text-3xl font-bold py-10 pl-5">Up Coming</div>
          <CardCarousel content={content} />
          <div className="text-3xl font-bold py-10 pl-5">Top Rated</div>
          <CardCarousel content={content} />
        </div>
      </div>
    </>
  )
}

export default HomePage
