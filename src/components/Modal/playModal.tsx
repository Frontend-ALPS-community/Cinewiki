const PlayModal = ({ closeModal }: { closeModal: () => void }) => {
  const youtubeID = 'nLL409se8sM?si=W_usutaHmE7rxPDA'
  const youtubeURL = `https://www.youtube.com/embed/${youtubeID}`

  return (
    <div className="fixed top-0 left-0 w-full h-[850px] bg-black bg-opacity-50 flex justify-center items-center z-10">
      <iframe className="w-[850px] h-[484px]" src={youtubeURL} title="YouTube video player" allowFullScreen />
      <button className="absolute top-40 right-60 text-gray-500 text-[40px] text-white" onClick={closeModal}>
        X
      </button>
    </div>
  )
}
export default PlayModal

/*
모달 수정 필요! 

import { PropsWithChildren } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDefault = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div className='fixed left-0 top-0 z-[200] flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
      <div className='m-auto flex flex-col rounded-lg border border-gray-300 bg-white px-5 pb-8 shadow-md'>
        <div className='mb-1 flex justify-end'>
          <button className='mt-3 h-6 w-6 cursor-pointer' onClick={onClose}>
            <span className='material-icons-outlined'>close</span>
          </button>
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default ModalDefault;


*/
