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
      <div className="rounded-full w-[76px] h-[76px] absolute bg-red-300 z-10" onClick={openModal}>
        <img className="w-[28px] h-[28px] mt-[22px] ml-[27px] " src="/assets/images/PlayBtn.png" />
      </div>
      {isModalOpen && <PlayModal closeModal={closeModal} />}
    </div>
  )
}

export default PlayBtn
