import { useNavigate } from 'react-router-dom'

const GoBackBtn = () => {
  const navigate = useNavigate()
  return (
    <button
      className="text-center px-3 py-1 mb-5 ml-2 rounded-xl text-center text-md font-bold border-[1px] border-gray-600 bg-white"
      onClick={() => navigate(-1)}
    >
      &lt; back
    </button>
  )
}

export default GoBackBtn
