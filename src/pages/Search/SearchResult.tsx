import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchMovies } from '../../apis/query'
import OneCardImage from '../../components/Card/card'
import { resultsType } from '../../types/type'

const SearchResultPage = () => {
  const { word } = useParams<string>()
  const { data, isLoading, error } = useSearchMovies(word?.toString() ?? 'default-word', 1)

  useEffect(() => {
    console.log('word 값 변경 감지:', word) // word 값 변경 시 로그 출력 (테스트용)
  }, [word])

  console.log(data?.results)
  return (
    <div className="w-content bg-yellow-100 flex flex-col m-auto justify-center">
      <div className="ml-5 text-lg font-bold mb-6">
        {word}
        {data && data?.results?.length}개
        {data && (
          <div>
            {data?.results?.map((info: resultsType) => (
              <OneCardImage info={info} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResultPage

// word?.toString() ?? 'default-word'
