import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ArrowRightIcon } from '../../../../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../../../../components/Icons/arrow-left'

// type ArrowProps = {
//   className?: string
//   onClick: () => void
// }

// const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
//   return (
//     <div
//       className={`${className} bg-gray-200 absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer z-10`}
//       onClick={onClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-10 w-10"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14v3m0 0v3m0-3h3m-3 0H7" />
//       </svg>
//     </div>
//   )
// }

// const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
//   return (
//     <div
//       className={`${className} absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer z-10`}
//       onClick={onClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-10 w-10"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 12a3 3 0 016 0 3 3 0 01-6 0 3 3 0 016 0 3 3 0 01-6 0z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 12a3 3 0 016 0 3 3 0 01-6 0 3 3 0 016 0 3 3 0 01-6 0z"
//         />
//       </svg>
//     </div>
//   )
// }

const images = [
  'https://i.ytimg.com/vi/i2i0uzo92gE/maxresdefault.jpg',
  'https://i.ytimg.com/vi/6rTljE9sd68/maxresdefault.jpg',
]

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <div className="right" onClick={onClick}>
      <ArrowRightIcon />
    </div>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div className="left" onClick={onClick}>
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
    <>
      <div>
        {slideState.activeSlide + 1}/{images.length}
      </div>
      <Slider {...settings}>
        {images?.map((image) => (
          <div>
            <img className="relative " src={image} />
          </div>
        ))}
      </Slider>
    </>
  )

  // const sliderRef = useRef<Slider>(null)

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
  //   prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   // centerPadding: '100px',
  // }

  // return (
  //   <div className="w-full bg-yellow-100">
  //     <div className="mx-auto">
  //       <Slider ref={sliderRef} {...sliderSettings}>
  //         <div className="bg-gray-100 h-[500px] max-w-[1060px]"> 11 </div>
  //         <div className="bg-gray-200 h-[500px] max-w-[1060px]"> 22 </div>
  //         <div className="bg-gray-300 h-[500px] max-w-[1060px]"> 33 </div>
  //         <div className="bg-gray-400 h-[500px] max-w-[1060px]"> 44 </div>
  //       </Slider>
  //     </div>
  //   </div>
  // )
}

export default MovieCarousel
