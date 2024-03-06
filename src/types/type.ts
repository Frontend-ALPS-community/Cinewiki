export interface NavBar {
  label: string
  src: string
  number: number
}

export const Nav: NavBar[] = [
  { src: '/assets/img/home.png', label: 'home', number: 1 },
  { src: '/assets/img/fire.png', label: 'Nowplay', number: 2 },
  { src: '/assets/img/popcorn.png', label: 'Upcoming', number: 3 },
  { src: '/assets/img/medal.png', label: 'Toprated', number: 4 },
]

export interface Page {
  name: string
  desc: string
}
