import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'

export interface NavBar {
  label: string
  src: string
  number: number
  path: string
}

export const Nav: NavBar[] = [
  { src: '/assets/images/home.png', label: 'home', number: 1, path: '/' },
  { src: '/assets/images/fire.png', label: 'Nowplay', number: 2, path: '/nowplaying' },
  { src: '/assets/images/popcorn.png', label: 'Upcoming', number: 3, path: '/upcoming' },
  { src: '/assets/images/medal.png', label: 'Toprated', number: 4, path: '/toprated' },
]

export interface Page {
  name: string
  desc: string
  getData: (word?: string | undefined) => UseInfiniteQueryResult<InfiniteData<any, unknown>, Error>
  word?: string
}

export interface resultsType {
  id: string
  poster_path: string
  backdrop_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
}

export interface fetchType {
  page: number
  results: resultsType[]
}
