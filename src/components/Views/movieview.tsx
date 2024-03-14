import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { Page, resultsType } from '../../types/type'
import OneCardImage from '../Card/card'

const MovieView: React.FC<Page> = ({ name, desc, getData, word }) => {
  // const res = word ? getData(word) : getData()
  const res = word ? getData(word) : getData()

  const { data } = res
  const [ref, inView] = useInView()
  useEffect(() => {
    // eslint-disable-next-line no-empty
    if (!inView) {
    }
    res.fetchNextPage()
  }, [inView])

  return (
    <div className="w-content w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">{name}</div>
      <div className="font-md text-md my-6">{desc}</div>
      <div className="flex flex-wrap gap-3 mx-auto">
        {data?.pages.map((page) => page.results.map((info: resultsType) => <OneCardImage info={info} />))}
      </div>
      <div ref={ref} />
    </div>
  )
}

export default MovieView
