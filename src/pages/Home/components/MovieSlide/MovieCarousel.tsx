import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Link, useParams } from 'react-router-dom'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'
import { IMAGE_URL } from '../../../../utils/ImageURL'
import { resultsType } from '../../../../types/type'
import PlayBtn from '../../../../components/Buttons/playBtn'
import { useMovieVideos } from '../../../../apis/query'

interface ArrowProps {
  onClick?: () => void
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute rounded p-3 z-10 bg-white border-solid right-[30px] top-[78%]" onClick={onClick}>
    <ArrowRightIcon />
  </div>
)

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute z-10 rounded p-3 bg-white border-solid right-[90px] top-[78%]" onClick={onClick}>
    <ArrowLeftIcon />
  </div>
)

interface MovieCarouselProps {
  images: resultsType[] | undefined
}

const IMG_BASE_URL = IMAGE_URL(1280)

const MovieCarousel: React.FC<MovieCarouselProps> = ({ images }) => {
  const { id } = useParams()
  // const { videos } = useMovieVideos(Number(id))

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
            <div key={image.id} className="flex align-center justify-center mx-auto">
              <Link to={`/detail/${image.id}`}>
                <div className="flex align-center justify-center mx-auto">
                  <img src={IMG_BASE_URL + image.backdrop_path} className="w-content" />
                </div>
              </Link>
              <div className="absolute top-[82%] ml-5 z-10">{/* <PlayBtn videos={videos.results[0]} /> */}</div>
              <div className="text-center mx-auto w-content m-4 text-xl font-bolder">{image.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MovieCarousel
