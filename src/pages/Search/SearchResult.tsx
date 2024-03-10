import { useParams } from 'react-router-dom'

const SearchResultPage = () => {
  const { word } = useParams()
  return (
    <div className="w-content bg-yellow-100 flex flex-col m-auto justify-center">
      <div className="ml-5 text-lg font-bold mb-6">{word}</div>
    </div>
  )
}

export default SearchResultPage
