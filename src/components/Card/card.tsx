import React, { useState } from 'react'
import { resultsType } from '../../types/type'

interface OneCardImageProps {
  info: resultsType
}

const OneCardImage: React.FC<OneCardImageProps> = ({ info }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="w-[160px] h-[240px] relative bg-gray-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img alt="i" src="/images/bicycle.jpg" className="w-[160px] h-[240px] rounded-lg object-fill" />
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white flex flex-col items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            <span>{info.title}</span>
            <span>rating 자리</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default OneCardImage
