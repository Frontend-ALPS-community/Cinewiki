import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { Page, resultsType } from '../../types/type'
import OneCardImage from '../Card/card'
import ScrollToTopButton from '../Buttons/scrollToTopBtn'

const MovieView: React.FC<Page> = ({ name, desc, getData, word }) => {
  const res = word ? getData(word) : getData()

  const { data } = res
  const [ref, inView] = useInView()

  useEffect(() => {
    // eslint-disable-next-line no-empty
    if (!inView) {
    }
    res.fetchNextPage()
  }, [inView])

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="w-content w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">{name}</div>
      {word ? (
        <div className="font-md text-md my-6 flex">
          <p className="font-bold mr-2 text-blue-400">{word}</p> 검색 결과
        </div>
      ) : (
        <div className="font-md text-md my-6">{desc}</div>
      )}
      <div className="flex flex-wrap gap-3 mx-auto">
        {data?.pages.map((page) => page.results.map((info: resultsType) => <OneCardImage info={info} />))}
      </div>
      <div ref={ref} />
      <ScrollToTopButton />
    </div>
  )
}

export default MovieView
