import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import OneCardImage from '../../../../../components/Card/card'
import { ArrowLeftIcon } from '../../../../../components/Icons/arrow-left'
import { ArrowRightIcon } from '../../../../../components/Icons/arrow-right'
import { resultsType } from '../../../../../types/type'

interface ArrowProps {
  onClick?: () => void
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute z-10 rounded-full p-3 bg-gray-100 top-[40%] right-[-60px]" onClick={onClick}>
    <ArrowRightIcon />
  </div>
)

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute z-10 rounded-full p-3 bg-gray-100 top-[40%] left-[-60px]" onClick={onClick}>
    <ArrowLeftIcon />
  </div>
)

interface CardCarouselProps {
  content: resultsType[]
}

const CardCarousel: React.FC<CardCarouselProps> = ({ content }) => {
  const slickRef = useRef<Slider>(null)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="mx-auto w-11/12">
        <Slider {...sliderSettings} ref={slickRef}>
          {content.map((item, index) => (
            <div key={index} className="">
              <div className="">
                <OneCardImage info={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CardCarousel
