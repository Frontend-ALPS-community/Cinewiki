interface PlayModalProps {
  youtubeURL: string
}

const PlayModal = ({ youtubeURL }: PlayModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="relative w-[850px] h-[484px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={youtubeURL}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default PlayModal
