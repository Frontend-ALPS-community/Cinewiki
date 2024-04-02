import React from 'react'

interface MoreBtnProps {
  onClick: () => void
  isExpanded: boolean
}

const MoreBtn: React.FC<MoreBtnProps> = ({ onClick, isExpanded }) => {
  return (
    <button
      className="text-center px-4 py-2 m-5 rounded-xl text-md font-bold border-[1px] border-gray-800 bg-white"
      onClick={onClick}
    >
      {isExpanded ? 'Close' : 'More'}
    </button>
  )
}

export default MoreBtn
