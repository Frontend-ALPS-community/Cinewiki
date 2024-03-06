import MovieView from '../../components/Views/movieview'
import { Page } from '../../types/type'

const page: Page = {
  name: 'Toprated',
  desc: '인기 있는 영화를 볼 수 있습니다',
}
const Toprated = () => {
  return <MovieView {...page} />
}

export default Toprated
