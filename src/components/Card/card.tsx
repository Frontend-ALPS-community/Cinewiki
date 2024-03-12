import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { resultsType } from '../../types/type'
import { ExpandWide } from '../Icons/expand'
import { IMAGE_URL } from '../../utils/ImageURL'

interface OneCardImageProps {
  info: resultsType
}

const IMG_BASE_URL = IMAGE_URL(300)

const OneCardImage: React.FC<OneCardImageProps> = ({ info }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/detail/${info.id}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="w-[160px] h-[240px] relative bg-gray-100 rounded-lg">
        <img
          alt="i"
          src={info.poster_path ? IMG_BASE_URL + info.poster_path : '/assets/images/backdrop.png'}
          className="w-[160px] h-[240px] rounded-lg object-fill"
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg">
            <div className="text-white flex flex-col items-center justify-center space-y-3 space-x-3 gap-3">
              <div className="flex items-center justify-center h-[100px]">
                <ExpandWide />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="font-bold mb-1">{info.title}</span>
                <span className="font-bold mb-1 min-h-[30px]">⭐{info.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default OneCardImage
