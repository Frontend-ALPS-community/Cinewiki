import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'
import { IMAGE_URL } from '../../../../utils/ImageURL'
import { resultsType } from '../../../../types/type'
import PlayBtn from '../../../../components/Buttons/playBtn'

interface MovieCarouselProps {
  images: resultsType[] | undefined
}

function NextArrow(props: any) {
  const { onClick } = props

  return (
    <div className="absolute rounded p-3 z-10 bg-white border-solid right-[30px] top-[78%]" onClick={onClick}>
      <ArrowRightIcon />
    </div>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div className="absolute z-10 rounded p-3 bg-white border-solid right-[90px] top-[78%]" onClick={onClick}>
      <ArrowLeftIcon />
    </div>
  )
}

const IMG_BASE_URL = IMAGE_URL(1280)

const MovieCarousel: React.FC<MovieCarouselProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // className: 'center',
    // centerMode: true,
    // centerPadding: '200px',
  }

  return (
    <div className="relative mx-auto w-content bg-yellow-100">
      <div className="mx-auto">
        <Slider {...settings}>
          {images?.map((image) => (
            <div className="flex align-center justify-center mx-auto">
              <div className="flex align-center justify-center mx-auto">
                <img src={IMG_BASE_URL + image.backdrop_path} className="w-content" />
              </div>
              <div className="absolute top-7 z-10">
                <PlayBtn />
              </div>
              <div className="text-center mx-auto w-content m-4 text-xl font-bolder">{image.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MovieCarousel
