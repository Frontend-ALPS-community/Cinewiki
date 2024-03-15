import Slider from 'react-slick'

// MoreBtnProps 타입 정의
interface MoreBtnProps {
  sliderRef: React.RefObject<Slider> // Slider 컴포넌트의 RefObject 타입
}
const MoreBtn: React.FC<MoreBtnProps> = ({ sliderRef }) => {
  const handleMore = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }
  return (
    <button
      className="text-center px-4 py-2 m-5 rounded-xl text-center text-md font-bold border-[1px] border-gray-800 bg-white"
      onClick={() => handleMore}
    >
      MORE
    </button>
  )
}

export default MoreBtn
