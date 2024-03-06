import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import MoreBtn from '../../../components/Buttons/moreBtn'

const DownPart = () => {
  const sliderRef = useRef<Slider>(null)

  const images = ['cast01.png', 'cast02.png', 'cast03.png', 'cast04.png', 'cast05.png', 'cast06.png']

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  }
  // console.log(sliderRef)
  return (
    <div className=" w-[1060px] h-[130vh] bg-yellow-200 mx-auto">
      <div className="pt-[21px] ml-[17px] w-[70px] h-[30px] text-[20px] font-bold mb-[40px]  ">Casts</div>
      {/* <div className=" ml-[39px] w-[1060px] "> */}
      <div className="w-[920px] h-[240px]  ml-[60px] border-2 border-sky-500">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-[160px] h-[210px] mr-[30px]  ">
              <img className="w-[160px] h-[210px] " src={`/images/${image}`} alt={`castSlide ${index + 1}`} />
              <div className="w-[160px] h-[24px]   text-center text-[20px] text-gray-300  ">cast name</div>
            </div>
          ))}
        </Slider>
      </div>

      {/* </div> */}
      <div className="grid place-items-center">
        <MoreBtn sliderRef={sliderRef} />
      </div>
    </div>
  )
}
export default DownPart

/*
      <div className="flex">
          <div className=" w-[160px] mr-[30px] ">
            <div className=" w-[160px] h-[210px] rounded-[10px] bg-gray-100 text-center pt-[80px]">cast card</div>
            <div className="w-[101px] h-[24px] mx-auto  text-center text-[20px] text-gray-300">cast name</div>
          </div>
          <div className=" w-[160px] mr-[30px]">
            <div className=" w-[160px] h-[210px] rounded-[10px] bg-gray-100 text-center pt-[80px]">cast card</div>
            <div className="w-[101px] h-[24px] mx-auto  text-center text-[20px] text-gray-300">cast name</div>
          </div>
          <div className=" w-[160px] mr-[30px]">
            <div className=" w-[160px] h-[210px] rounded-[10px] bg-gray-100 text-center pt-[80px]">cast card</div>
            <div className="w-[101px] h-[24px] mx-auto  text-center text-[20px] text-gray-300">cast name</div>
          </div>
          <div className=" w-[160px] mr-[30px]">
            <div className=" w-[160px] h-[210px] rounded-[10px] bg-gray-100 text-center pt-[80px]">cast card</div>
            <div className="w-[101px] h-[24px] mx-auto  text-center text-[20px] text-gray-300">cast name</div>
          </div>
          <div className=" w-[160px] mr-[30px]">
            <div className=" w-[160px] h-[210px] rounded-[10px] bg-gray-100 text-center pt-[80px]">cast card</div>
            <div className="w-[101px] h-[24px] mx-auto  text-center text-[20px] text-gray-300">cast name</div>
          </div>
        </div>
*/