import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useMovieCredits } from '../../../apis/query'
import MoreBtn from '../../../components/Buttons/moreBtn'
import { IMAGE_URL } from '../../../utils/ImageURL'

const DownPart = () => {
  const { id } = useParams()
  const sliderRef = useRef<Slider>(null)

  const images = ['cast01.png', 'cast02.png', 'cast03.png', 'cast04.png', 'cast05.png', 'cast06.png']
  const { data } = useMovieCredits(Number(id))
  console.log(data)
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  }
  // const cast = cast.profile_path ? `${IMAGE_URL(300)}${cast.profile_path}` : '/assets/images/backdrop.png'

  return (
    <div className=" w-content mx-auto">
      <div className="pt-[21px] ml-[17px] text-lg font-bold mb-[40px] ">Casts</div>
      {data && (
        <div className="w-[920px] h-[240px] ml-[60px] border-2 border-sky-500">
          <Slider ref={sliderRef} {...settings}>
            {data.cast.map((cast: any, index: number) => (
              <div key={index} className="w-[160px] h-[210px] mr-[30px]  ">
                <img
                  className="w-[160px] h-[210px] "
                  src={`${cast.profile_path ? `${IMAGE_URL(300)}${cast.profile_path}` : '/assets/images/backdrop.png'}`}
                  alt={`castSlide ${index + 1}`}
                />
                <div className="w-[160px] h-[24px] text-center text-[20px] text-gray-300  ">{cast.name}</div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      <div className="grid place-items-center">
        <MoreBtn sliderRef={sliderRef} />
      </div>
    </div>
  )
}
export default DownPart
