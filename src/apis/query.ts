import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Axios } from './@core'

const nowplay = '/movie/now_playing'
const toprated = '/movie/top_rated'
const upcoming = '/movie/upcoming'
const search = '/search/movie'
const detail = '/movie'

export const AxiosGetNow = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(nowplay, {
    params: {
      page: params,
    },
  })
  return res.data
}
const AxiosGetToprated = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(toprated, {
    params: {
      page: params,
    },
  })
  return res.data
}
const AxiosGetUpcoming = async (params: any) => {
  // eslint-disable-next-line no-return-await
  const res = await Axios.get(upcoming, {
    params: {
      page: params,
    },
  })
  return res.data
}

const AxiosGetSearch = async (word: string | undefined, page: number) => {
  const res = await Axios.get(search, {
    params: { query: word, page },
  })
  return res.data
}

const AxiosGetDetail = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}`)

  return res.data
}

const AxiosGetImages = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}/images`)

  return res.data
}

const AxiosGetMovieVideos = async (movieId: number, language = 'en-US') => {
  const res = await Axios.get(`/movie/${movieId}/videos`, {
    params: {
      language,
    },
  })
  return res.data
}

const AxiosGetMovieCredits = async (id: number) => {
  const res = await Axios.get(`${detail}/${id}/credits`)

  return res.data
}

export const getNowPlayData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useInfiniteQuery({
    queryKey: ['nowplay'],
    queryFn: ({ pageParam = 1 }) => AxiosGetNow(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // 다음 페이지 번호 반환
      return allPages.length + 1
    },
    initialPageParam: 1,
  })
  return data
}
export const getTopratedData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useInfiniteQuery({
    queryKey: ['toprated'],
    queryFn: ({ pageParam = 1 }) => AxiosGetToprated(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // 다음 페이지 번호 반환
      return allPages.length + 1
    },
    initialPageParam: 1,
  })
  return data
}
export const getUpcomingData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useInfiniteQuery({
    queryKey: ['upcoming'],
    queryFn: ({ pageParam = 1 }) => AxiosGetUpcoming(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // 다음 페이지 번호 반환
      return allPages.length + 1
    },
    initialPageParam: 1,
  })
  return data
}

export const getSearchData = (word: string | undefined) => {
  // 검색 키워드를 인수로 받음
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useInfiniteQuery({
    queryKey: ['search'],
    queryFn: ({ pageParam = 1 }) => AxiosGetSearch(word, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // 다음 페이지 번호 반환
      return allPages.length + 1
    },
    initialPageParam: 1,
  })

  return data
}

export const useMovieDetail = (id: number) => {
  const data = useQuery({
    queryKey: ['detail'],
    queryFn: () => AxiosGetDetail(id),
  })
  return data
}

export const useMovieImage = (id: number) => {
  const images: any = useQuery({
    queryKey: ['image'],
    queryFn: () => AxiosGetImages(id),
  })
  return images
}

export const useMovieVideos = (id: number, language = 'en-US') => {
  const videos: any = useQuery({
    queryKey: ['movieVideos'],
    queryFn: () => AxiosGetMovieVideos(id),
  })

  return videos
}

export const useMovieCredits = (id: number) => {
  const credit: any = useQuery({
    queryKey: ['movieCredit'],
    queryFn: () => AxiosGetMovieCredits(id),
  })

  return credit
}
