import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'

const images = [
  'https://i.ytimg.com/vi/i2i0uzo92gE/maxresdefault.jpg',
  'https://i.ytimg.com/vi/6rTljE9sd68/maxresdefault.jpg',
  'https://i.ytimg.com/vi/i2i0uzo92gE/maxresdefault.jpg',
  'https://i.ytimg.com/vi/6rTljE9sd68/maxresdefault.jpg',
]

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <div className="absolute translate-y-2/4 z-10 bg-red-400 right-[-34px]" onClick={onClick}>
      <ArrowRightIcon />
    </div>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div className="absolute z-10 bg-red-400 left-[-34px]" onClick={onClick}>
      <ArrowLeftIcon />
    </div>
  )
}

const MovieCarousel: React.FC = () => {
  const [slideState, setSlideState] = useState({
    activeSlide: 0,
    activeSlide2: 0,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setSlideState({ activeSlide: next, activeSlide2: current }),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="relative mx-auto w-full bg-yellow-100">
      <div className="mx-auto">
        <div>
          스크린샷 {slideState.activeSlide + 1}/{images.length}
        </div>
        <Slider {...settings}>
          {images?.map((image) => (
            <div>
              <img src={image} />
            </div>
          ))}
        </Slider>
        <span className=" text-xl font-bolder">MOVIE TITLE</span>
      </div>
    </div>
  )
}

export default MovieCarousel
