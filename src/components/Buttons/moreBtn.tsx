import React from 'react'

interface MoreBtnProps {
  gridHeight: string
  setGridHeight: React.Dispatch<React.SetStateAction<string>>
}
const MoreBtn: React.FC<MoreBtnProps> = ({ gridHeight, setGridHeight }) => {
  const more = Number(gridHeight) * 2

  return (
    <button
      className="text-center px-4 py-2 m-5 rounded-xl text-center text-md font-bold border-[1px] border-gray-800 bg-white"
      onClick={() => setGridHeight(more.toString())}
    >
      MORE
    </button>
  )
}

export default MoreBtn
