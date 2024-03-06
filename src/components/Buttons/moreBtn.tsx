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
      className="mt-[42px] mb-[20px] h-[47px] w-[94px] rounded-[15px] text-center  text-[20px] font-bold border-[1px] border-gray-600 bg-white
      border-[1px] border-black
      "
      onClick={() => handleMore}
    >
      MORE
    </button>
  )
}

export default MoreBtn
