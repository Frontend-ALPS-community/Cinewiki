import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="h-[100px]">헤더입니다 - 로고 높이만큼 비우기</div>
      <Outlet />
    </>
  )
}

export default Layout
