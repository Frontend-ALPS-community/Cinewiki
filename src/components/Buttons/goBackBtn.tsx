import { useNavigate } from 'react-router-dom'

const GoBackBtn = () => {
  const navigate = useNavigate()
  return (
    <button
      className="ml-[9px] mb-[20px] h-[47px] w-[94px] rounded-[15px] text-center  text-[20px] font-bold border-[1px] border-gray-600 bg-white"
      onClick={() => navigate(-1)}
    >
      &lt;뒤로
    </button>
  )
}

export default GoBackBtn
