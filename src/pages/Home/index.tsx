import HomeBanner from './components/homeBanner'
import HomeCardGroup from './components/homeCardGroup'

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col m-auto justify-center items-center bg-gray-100">
        <div className="w-full max-w-[1920px]">
          <HomeBanner />
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
