import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMovieDetail } from '../../apis/query'
import DownPart from './components/downPart'
import UpperPart from './components/upperPart'

const DetailPage = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useMovieDetail(Number(id))
  useEffect(() => {
    console.log('word 값 변경 감지:', id) // word 값 변경 시 로그 출력 (테스트용)
  }, [id])

  return (
    <div className="w-full">
      {data && <UpperPart data={data} />}

      <div className="border-t border-[3px] border-[8D8D8D] top-[841px] left-0 right-0" />

      <DownPart />
    </div>
  )
}
export default DetailPage

/**
 
className=" w-[1060px] h-[130vh] bg-yellow-200 mx-auto "

회색선 absolute로 해보기.

 */
