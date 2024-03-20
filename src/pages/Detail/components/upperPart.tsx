import { useParams } from 'react-router-dom'
import { useMovieDetail } from '../../../apis/query'
import GoBackBtn from '../../../components/Buttons/goBackBtn'
import PlayBtn from '../../../components/Buttons/playBtn'
import { IMAGE_URL } from '../../../utils/ImageURL'

const UpperPart = () => {
  const { id } = useParams()
  const { data } = useMovieDetail(Number(id))

  const backURL = data?.backdrop_path
    ? `${IMAGE_URL(1280)}${data?.backdrop_path}`
    : '/assets/images/noImage_backdrop.png'

  const posterURL = data?.poster_path ? `${IMAGE_URL(300)}${data?.poster_path}` : '/assets/images/backdrop.png'

  return (
    <div className="min-h-[1000px]">
      {data && (
        <div className="pt-[36px] relative w-content mx-auto ">
          <GoBackBtn />
          <img src={backURL} className="w-full overflow-hidden" />
          <div className="absolute top-[620px] left-5">
            <PlayBtn id={id} />
          </div>

          <div className="w-[160px] h-[240px] border-2 rounded-[10px] absolute top-[550px] left-[837px] bg-gray-100">
            <img src={posterURL} className=" h-full rounded-[10px]" />
          </div>

          <div className="ml-[21px] flex items-center text-center my-5 gap-7">
            <div className="text-[32px] font-bold ">{data?.title}</div>
            <div className="">
              {data?.genres.map((item: any) => (
                <span
                  key={item.id}
                  className="mr-3 cursor-pointer text-[16px] text-gray-300 border-2 px-3 py-2 rounded-3xl"
                >
                  #{item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 flex text-center items-center gap-3">
            <span className="ml-4 py-1.5 px-4 text-center text-md font-bold rounded-lg border-2 border-gray-200 bg-white">
              ⭐ {data?.vote_average.toFixed(1)}
            </span>
            <span className="text-md font-bold"> Released : {data?.release_date}</span>
          </div>

          <div className="my-8 mx-5 text-[18px]">{data?.overview}</div>
        </div>
      )}
    </div>
  )
}
export default UpperPart
