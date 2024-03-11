import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'
import { IMAGE_URL } from '../../../../utils/ImageURL'
import { resultsType } from '../../../../types/type'

interface MovieCarouselProps {
  images: resultsType[] | undefined
}

function NextArrow(props: any) {
  const { onClick } = props

  return (
    <div
      className="absolute rounded p-3 translate-y-2/4 z-10 bg-white border-solid right-[30px] bottom-[20%]"
      onClick={onClick}
    >
      <ArrowRightIcon />
    </div>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div className="absolute z-10 rounded p-3 bg-white border-solid right-[90px] top-[76%]" onClick={onClick}>
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
  }

  return (
    <div className="relative mx-auto w-full bg-yellow-100">
      <div className="mx-auto">
        <Slider {...settings}>
          {images?.map((image) => (
            <>
              <div className="flex align-center justify-center">
                <img src={IMG_BASE_URL + image.backdrop_path} />
              </div>
              <div className="m-4 text-xl font-bolder">{image.title}</div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MovieCarousel
