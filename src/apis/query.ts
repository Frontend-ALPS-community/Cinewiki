import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import {
  AxiosGetDetail,
  AxiosGetImages,
  AxiosGetMovieCredits,
  AxiosGetMovieVideos,
  AxiosGetNow,
  AxiosGetSearch,
  AxiosGetToprated,
  AxiosGetUpcoming,
} from './axios'

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
  const images = useQuery({
    queryKey: ['image'],
    queryFn: () => AxiosGetImages(id),
  })
  return images
}

export const useMovieVideos = (id: number, language = 'en-US') => {
  const videos = useQuery({
    queryKey: ['movieVideos'],
    queryFn: () => AxiosGetMovieVideos(id),
  })

  return videos
}

export const useMovieCredits = (id: number) => {
  const credit = useQuery({
    queryKey: ['movieCredit'],
    queryFn: () => AxiosGetMovieCredits(id),
  })

  return credit
}
