import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { getSearchData } from '../../apis/query'
import { search } from '../../atoms/searchAtom'
import MovieView from '../../components/Views/movieview'
import { Page } from '../../types/type'

const page: Page = {
  name: 'Search',
  desc: '검색 결과',
  getData: (word) => getSearchData(word),
}

const SearchResultPage = () => {
  const { word } = useParams()
  const searchWord = useRecoilValue(search)

  return <MovieView {...page} word={searchWord} />
}

export default SearchResultPage

// word?.toString() ?? 'default-word'
