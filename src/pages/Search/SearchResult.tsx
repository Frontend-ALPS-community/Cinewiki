import { useLocation } from 'react-router-dom'
import { getSearchData } from '../../apis/query'
import MovieView from '../../components/Views/movieview'
import { Page } from '../../types/type'

const page: Page = {
  name: 'Search',
  desc: '검색 결과',
  getData: (word) => getSearchData(word),
}

const SearchResultPage = () => {
  const location = useLocation()
  const word = location.search.slice(6)

  return <MovieView {...page} word={word} />
}

export default SearchResultPage
