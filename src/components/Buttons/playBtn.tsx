import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PlayModal from '../Modal/playModal'

const PlayBtn = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const youtubeID = 'nLL409se8sM?si=W_usutaHmE7rxPDA'
  const youtubeURL = `https://www.youtube.com/embed/${youtubeID}`

  return (
    <div>
      <div className="rounded-full w-[76px] h-[76px] absolute top-[512px] left-[11px] bg-gray-100 " onClick={openModal}>
        <img className="w-[28px] h-[28px] mt-[22px] ml-[27px] " src="/assets/images/PlayBtn.png" />
      </div>
      {isModalOpen && (
        // <div className="fixed top-0  left-0 w-full h-[850px] bg-black bg-opacity-50 flex justify-center items-center z-10">
        //   <iframe
        //     className="w-[850px] h-[484px]"
        //     src={youtubeURL}
        //     title="YouTube video player"
        //     allowFullScreen
        //   ></iframe>

        //   <button className="absolute top-40 right-60 text-gray-500 text-[40px] text-white" onClick={closeModal}>
        //     X
        //   </button>
        // </div>
        <PlayModal closeModal={closeModal} />
      )}
    </div>
  )
}

export default PlayBtn
