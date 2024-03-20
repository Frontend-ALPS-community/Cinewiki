import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { getNowPlayData } from '../../../../apis/query'
import PlayBtn from '../../../../components/Buttons/playBtn'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { IMAGE_URL } from '../../../../utils/ImageURL'

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

const IMG_BASE_URL = IMAGE_URL(1280)

const MovieCarousel: React.FC = () => {
  const res = getNowPlayData()
  const { data } = res

  const images = data?.pages.flatMap((page) => page.results)

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
              <div className="absolute top-[82%] ml-5 z-10">
                <PlayBtn id={image.id} />
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
