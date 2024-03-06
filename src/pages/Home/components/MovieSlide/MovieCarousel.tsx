import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

type ArrowProps = {
  className?: string
  onClick: () => void
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} bg-gray-200 absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer z-10`}
      onClick={onClick}
    >
      <img src="/icon/right-arrow.png" />
    </div>
  )
}

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer z-10`}
      onClick={onClick}
    >
      <img src="/icon/left-arrow.png" />
    </div>
  )
}

const MovieCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '100px',
  }

  return (
    <div className="w-full bg-yellow-100">
      <div className="mx-auto">
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="bg-gray-100 h-[500px] w-[1060px]"> 11 </div>
          <div className="bg-gray-200 h-[500px] w-[1060px]"> 22 </div>
          <div className="bg-gray-300 h-[500px] w-[1060px]"> 33 </div>
          <div className="bg-gray-400 h-[500px] w-[1060px]"> 44 </div>
        </Slider>
      </div>
    </div>
  )
}

export default MovieCarousel
