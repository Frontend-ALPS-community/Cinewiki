import { useState } from 'react'
import { useMovieVideos } from '../../apis/query'
import ModalDefault from '../Modal/defaultModal'
import PlayModal from '../Modal/playModal'

interface PlayBtnProps {
  // videos: resultsType[] | undefined
  id: string | undefined
}

const PlayBtn: React.FC<PlayBtnProps> = ({ id }) => {
  const videos = useMovieVideos(Number(id))
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const youtubeURL = videos?.data?.results ? `https://www.youtube.com/embed/${videos?.data?.results[0].key}` : ''

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
