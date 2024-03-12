import { useEffect } from 'react'
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
  console.log(data)
  useEffect(() => {
    console.log('word 값 변경 감지:', id) // word 값 변경 시 로그 출력 (테스트용)
  }, [id])
  return (
    <div>
      {data && (
        <div className="pt-[36px] relative  w-[1060px]  bg-yellow-200 mx-auto ">
          <GoBackBtn />
          <img src={backURL} className="w-[1057px] h-[457px] overflow-hidden " />

          <PlayBtn />

          <div className="w-[160px] h-[240px]  rounded-[10px] absolute top-[426px] left-[837px]  bg-gray-100">
            <img src={posterURL} className=" h-full rounded-[10px]" />
          </div>
          <div className="mt-[36px] ml-[21px] h-[36px] text-[30px] font-bold ">{data?.title}</div>
          <div className="mt-[34px]">
            <span className="ml-[9px] rounded-[5px] p-[10px] mr-[30px]  text-[20px] text-center border-2 border-black bg-white">
              ⭐ {data?.vote_average}
            </span>
            {/* <span className="text-[18px]"> * 1977/ 2h 1min/ released</span> */}
            <span className="text-[18px]"> {data?.release_date}</span>
          </div>
          <div className="mt-[21px] ml-[21px] text-[18px]">{data?.overview}</div>
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
