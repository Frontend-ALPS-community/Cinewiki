export interface NavBar {
  label: string
  src: string
  number: number
}

export const Nav: NavBar[] = [
  { src: '/assets/images/home.png', label: 'home', number: 1 },
  { src: '/assets/images/fire.png', label: 'Nowplay', number: 2 },
  { src: '/assets/images/popcorn.png', label: 'Upcoming', number: 3 },
  { src: '/assets/images/medal.png', label: 'Toprated', number: 4 },
]

export interface Page {
  name: string
  desc: string
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
