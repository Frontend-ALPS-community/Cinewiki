const PlayModal = ({ closeModal }: { closeModal: () => void }) => {
  const youtubeID = 'nLL409se8sM?si=W_usutaHmE7rxPDA'
  const youtubeURL = `https://www.youtube.com/embed/${youtubeID}`

  return (
    <div className="fixed top-0  left-0 w-full h-[850px] bg-black bg-opacity-50 flex justify-center items-center z-10">
      <iframe className="w-[850px] h-[484px]" src={youtubeURL} title="YouTube video player" allowFullScreen />

      <button className="absolute top-40 right-60 text-gray-500 text-[40px] text-white" onClick={closeModal}>
        X
      </button>
    </div>
  )
}
export default PlayModal
