import { useState } from 'react'
import PlayModal from '../Modal/playModal'
import ModalDefault from '../Modal/defaultModal'
import { resultsType } from '../../types/type'

interface PlayBtnProps {
  videos: resultsType[] | undefined
}

const PlayBtn: React.FC<PlayBtnProps> = ({ videos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // const youtubeID = 'nLL409se8sM?si=W_usutaHmE7rxPDA'
  // const youtubeURL = `https://www.youtube.com/embed/${youtubeID}`

  const youtubeURL = videos && videos.length > 0 ? `https://www.youtube.com/embed/${videos[0].key}` : ''

  console.log('youtube', youtubeURL)

  return (
    <div>
      <div className="rounded-full w-[76px] h-[76px] absolute bg-red-300 z-10" onClick={openModal}>
        <img className="w-[28px] h-[28px] mt-[22px] ml-[27px] " src="/assets/images/PlayBtn.png" />
      </div>
      <ModalDefault isOpen={isModalOpen} onClose={closeModal}>
        <PlayModal youtubeURL={youtubeURL} />
      </ModalDefault>
    </div>
  )
}

export default PlayBtn
