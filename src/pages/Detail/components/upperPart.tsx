import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GoBackBtn from '../../../components/Buttons/goBackBtn'
import PlayBtn from '../../../components/Buttons/playBtn'

const UpperPart = (data: any) => {
  const images = ['img01.png', 'img02.png', 'img03.png']
  const transition = { duration: 0.5, ease: 'easeInOut' }
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams()
  const baseURL = `https://image.tmdb.org/t/p/w1280`
  console.log(data)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length)
    }, 3000) // 3초마다 이미지 변경
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="pt-[36px] relative  w-[1060px]  bg-yellow-200 mx-auto ">
      <GoBackBtn />

      <div className="w=[1057px] h-[457px] overflow-hidden ">
        {/* <AnimatePresence mode="popLayout">
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
        </AnimatePresence> */}
      </div>

      <PlayBtn />

      <div className="w-[160px] h-[240px]  rounded-[10px] absolute top-[426px] left-[837px]  bg-gray-100">
        <img src="/assets/images/img04.png" className=" h-full rounded-[10px]" />
      </div>
      <div className="mt-[36px] ml-[21px] h-[36px] text-[30px] font-bold ">{id}</div>
      <div className="mt-[34px]">
        <span className="ml-[9px] rounded-[5px] p-[10px] mr-[30px]  text-[20px] text-center border-2 border-black bg-white">
          ⭐ 9.7
        </span>
        <span className="text-[18px]"> * 1977/ 2h 1min/ released</span>
      </div>
      <div className="mt-[21px] ml-[21px] text-[18px]">
        Her web connects them all.
        <br />
        Forced to confront revelations about her past,.
        <br /> paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures....
        <br /> if they can all survive a deadly present.
      </div>
    </div>
  )
}
export default UpperPart
