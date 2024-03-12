import { useParams } from 'react-router-dom'
import { useSearchMovies } from '../../apis/query'

const SearchResultPage = () => {
  const { word } = useParams<string>()
  const { data, isLoading, error } = useSearchMovies(word?.toString() ?? 'default-word', 1)
  // console.log(data)
  return (
    <div className="w-content bg-yellow-100 flex flex-col m-auto justify-center">
      <div className="ml-5 text-lg font-bold mb-6">
        {word}
        {data && <div className="text-lg">{data?.result?.results.length}개</div>}
      </div>
    </div>
  )
}

export default SearchResultPage

// word?.toString() ?? 'default-word'
