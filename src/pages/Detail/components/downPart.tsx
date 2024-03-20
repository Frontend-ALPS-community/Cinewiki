import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMovieCredits } from '../../../apis/query'
import MoreBtn from '../../../components/Buttons/moreBtn'
import { cast } from '../../../types/type'
import { IMAGE_URL } from '../../../utils/ImageURL'

const DownPart = () => {
  const { id } = useParams()
  const [gridHeight, setGridHeight] = useState('240px')
  const { data } = useMovieCredits(Number(id))

  return (
    <div className="  w-content mx-auto">
      <div className="pt-[21px] ml-[17px] text-lg font-bold mb-[40px] ">Casts</div>
      {data && (
        <div className={`mx-auto grid grid-cols-5 gap-[30px] overflow-hidden w-[1000px] h-[${gridHeight}]`}>
          {data.cast.map((cast: cast, index: number) => (
            <div key={index} className="w-[160px] h-[260px]  ">
              <img
                className="w-[160px] h-[210px] "
                src={`${cast.profile_path ? `${IMAGE_URL(300)}${cast.profile_path}` : '/assets/images/backdrop.png'}`}
                alt={`cast ${index + 1}`}
              />
              <div className="w-[160px] h-[24px] mt text-center text-[20px] text-gray-300  ">{cast.name}</div>
            </div>
          ))}
        </div>
      )}

      <div className="grid place-items-center">
        <MoreBtn gridHeight={gridHeight} setGridHeight={setGridHeight} />
      </div>
    </div>
  )
}
export default DownPart
