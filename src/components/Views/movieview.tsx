import React from 'react'
import { arr } from '../../pages/Nowplaying/index'

import { Page } from '../../types/type'

const MovieView: React.FC<Page> = ({ name, desc }) => {
  console.log(name, desc)
  return (
    <div className="bg-subColor-200 w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">{name}</div>
      <div className="font-md text-md my-6">{desc}.</div>
      <div className="flex flex-wrap mx-auto">
        {arr.map((el) => (
          <div className="bg-slate-100 w-card h-card m-2">{el}</div>
        ))}
      </div>
    </div>
  )
}

export default MovieView
