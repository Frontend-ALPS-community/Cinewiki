interface PlayModalProps {
  youtubeURL: string
}

const PlayModal = ({ youtubeURL }: PlayModalProps) => {
  return (
    <div className="w-[850px] h-[484px]">
      <iframe className="w-full h-full" src={youtubeURL} title="YouTube video player" allowFullScreen />
    </div>
  )
}

export default PlayModal
