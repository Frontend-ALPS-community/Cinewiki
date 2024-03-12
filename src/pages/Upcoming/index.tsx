import { getUpcomingData } from '../../apis/query'
import MovieView from '../../components/Views/movieview'
import { Page } from '../../types/type'

const page: Page = {
  name: 'UpComing',
  desc: '곧 개봉할 영화를 볼 수 있습니다',
  getData: getUpcomingData,
}
const Upcoming = () => {
  return <MovieView {...page} />
}

export default Upcoming
