import React from 'react'

// MoreBtnProps 타입 정의
interface MoreBtnProps {
  gridHeight: string
  setGridHeight: React.Dispatch<React.SetStateAction<string>>
}
const MoreBtn: React.FC<MoreBtnProps> = ({ gridHeight, setGridHeight }) => {
  const more = Number(gridHeight) * 2

  const handleMore = () => {
    console.log('@')
    setGridHeight(more.toString())
  }

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
