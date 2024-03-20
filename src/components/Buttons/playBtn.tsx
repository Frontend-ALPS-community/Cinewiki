import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ModalDefault from '../Modal/playModal'

const PlayBtn = () => {
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const { data } = getMovieVideo(Number(id))

  // console.log(data)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  // 영상 배열 찾기 및 순회
  // const videos = data?.results // data 객체에서 results 배열 추출 (data 존재 확인)
  // let officialTrailerIndex = -1 // "Official Trailer" 영상 인덱스 초기화

  // if (videos) {
  //   for (let i = 0; i < videos.length; i += 1) {
  //     if (videos[i].name === 'Official Trailer') {
  //       officialTrailerIndex = i
  //       break // 찾으면 루프 종료
  //     }
  //   }
  // }
  // const youtubeID = data?.results[officialTrailerIndex]?.key
  // const youtubeURL = `https://www.youtube.com/embed/${youtubeID}`

  return (
    <div>
      <div className="rounded-full w-[76px] h-[76px] absolute bg-red-300 z-10" onClick={openModal}>
        <img className="w-[28px] h-[28px] mt-[22px] ml-[27px] " src="/assets/images/PlayBtn.png" />
      </div>
      {isModalOpen && (
        <ModalDefault isOpen={isModalOpen} onClose={closeModal}>
          {/* <div>
            <iframe
              width="853"
              height="480"
              src={youtubeURL}
              title="YouTube video"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div> */}
        </ModalDefault>
      )}
    </div>
  )
}

export default PlayBtn
