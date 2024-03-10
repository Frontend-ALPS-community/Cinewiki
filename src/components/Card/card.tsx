import React, { useState } from 'react'
import { resultsType } from '../../types/type'
import { ExpandWide } from '../Icons/expand'

interface OneCardImageProps {
  info: resultsType
}

const OneCardImage: React.FC<OneCardImageProps> = ({ info }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="w-[160px] h-[240px] relative bg-gray-100 rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img alt="i" className="w-[160px] h-[240px] rounded-lg object-fill" />
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-white flex flex-col items-center justify-center space-x-3 gap-3">
            <ExpandWide />
            <span>{info.title}</span>
            <span>⭐{info.vote_average}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default OneCardImage
