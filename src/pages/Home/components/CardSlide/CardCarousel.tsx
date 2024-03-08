import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { mergedItem } from '../..'
import { getNowPlayData } from '../../../../apis/query'
import OneCardImage from '../../../../components/Card/card'

type ArrowProps = {
  className: string
  onClick: () => void
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  // const data = useQuery<{ results: resultsType[] }>('nowplay')
  return (
    <div
      className={`${className} absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer z-10`}
      onClick={onClick}
    >
      <img src="/icon/right-arrow.png" className="bg-transparent filter hover:invert" />
    </div>
  )
}

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer z-10`}
      onClick={onClick}
    >
      <img src="/icon/left-arrow.png" className="bg-transparent filter hover:invert" />
    </div>
  )
}

interface CardCarouselProps {
  content: mergedItem[]
}

const CardCarousel: React.FC<CardCarouselProps> = ({ content }) => {
  const data = getNowPlayData()
  const slickRef = useRef<Slider>(null)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow onClick={() => slickRef.current?.slickNext()} className="" />,
    prevArrow: <PrevArrow onClick={() => slickRef.current?.slickPrev()} className="" />,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="mx-auto w-11/12">
        <Slider {...sliderSettings} ref={slickRef}>
          {content.map((animalItem, index) => (
            <div key={index} className="">
              <div className="">
                카드카드
                <OneCardImage info={data} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CardCarousel
