import { useParams } from 'react-router-dom'
import { useMovieDetail, useMovieImage } from '../../../apis/query'
import GoBackBtn from '../../../components/Buttons/goBackBtn'
import PlayBtn from '../../../components/Buttons/playBtn'
import { IMAGE_URL } from '../../../utils/ImageURL'

const UpperPart = () => {
  const { id } = useParams()
  const { data } = useMovieDetail(Number(id))
  const { images } = useMovieImage(Number(id))
  const backURL = `${IMAGE_URL(1280)}${data?.backdrop_path}`
  const posterURL = `${IMAGE_URL(300)}${data?.poster_path}`

  return (
    <div>
      {data && (
        <div className="pt-[36px] relative w-content mx-auto ">
          <GoBackBtn />
          <img src={backURL} className="w-full overflow-hidden" />
          <div className="absolute top-[67%] left-5">
            <PlayBtn />
          </div>

          <div className="w-[160px] h-[240px] border-2 rounded-[10px] absolute top-[550px] left-[837px]  bg-gray-100">
            <img src={posterURL} className=" h-full rounded-[10px]" />
          </div>
          <div className="mt-[36px] ml-[21px] h-[36px] text-[32px] font-bold ">{data?.title}</div>
          <div className="mt-[34px] flex text-center items-center gap-3">
            <span className="ml-4 py-1.5 px-4 text-center text-md font-bold rounded-lg border-2 border-gray-200 bg-white">
              ⭐ {data?.vote_average.toFixed(1)}
            </span>
            <span className="text-md font-bold"> {data?.release_date}</span>
            {/* <span className="text-[18px]"> * 1977/ 2h 1min/ released</span> */}
          </div>
          <div className="my-8 mx-5 text-[18px]">{data?.overview}</div>
        </div>
      )}
    </div>
  )
}
export default UpperPart
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length)
//   }, 3000) // 3초마다 이미지 변경
//   return () => clearInterval(interval)
// }, [])

/* 
  const images = ['img01.png', 'img02.png', 'img03.png']
  const transition = { duration: 0.5, ease: 'easeInOut' }
  const [currentIndex, setCurrentIndex] = useState(0)

<AnimatePresence mode="popLayout">
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{
                backgroundImage: `url${baseURL}/${data?.data.backdrop_path}`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                display: index === currentIndex ? 'inline-block' : 'none',
              }}
              initial={{ x: index === currentIndex ? '100%' : 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: index === currentIndex ? '-100%' : 0, opacity: 0 }}
              transition={transition}
            />
          ))}
        </AnimatePresence> */
