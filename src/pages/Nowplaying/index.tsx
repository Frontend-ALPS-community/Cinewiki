import { getNowPlayData } from '../../apis/query'
import MovieView from '../../components/Views/movieview'
import { Page } from '../../types/type'

const page: Page = {
  name: 'NowPlaying',
  desc: '현재 상영하는 영화를 확인 할 수 있습니다.',
  getData: getNowPlayData,
}
const Nowplaying = () => {
  return <MovieView {...page} />
}

export default Nowplaying
