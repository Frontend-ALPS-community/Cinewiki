import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav, NavBar } from '../../types/type'
import UnderLine from '../Underline/underline'

const Layout = () => {
  // 조건부스타일
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [selected, setSelected] = useState<NavBar>(Nav[0])
  const [preItem, setPreItem] = useState<NavBar>(Nav[0])

  const onClickBtn = (num: number) => {
    // eslint-disable-next-line default-case
    switch (num) {
      case 1:
        navigate('/')
        break
      case 2:
        navigate('/nowplaying')
        break
      case 3:
        navigate('/upcoming')
        break
      case 4:
        navigate('/toprated')
        break
      case 5:
        navigate('/')
        break
    }
  }

  return (
    <div className="flex">
      {/* 딤드 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black fixed w-full h-full"
            initial={{ opacity: '0' }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="bg-primary-100 h-screen fixed top-0 z-30"
        layout
        initial={{ width: '122px' }}
        transition={{ duration: 0.3 }}
        animate={{ width: isOpen ? '240px' : '122px' }}
        onHoverStart={() => setIsHovered(!isHovered)}
        onHoverEnd={() => setIsHovered(!isHovered)}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {/* 로고 */}
        <div className="flex justify-center items-center mt-[30px]">
          <img
            onClick={(e) => {
              onClickBtn(1)
            }}
            className="cursor-pointer w-[60px] h-[60px]"
            src="/assets/img/logo.png"
          />
          {isOpen && <motion.div className="text-lg font-bolder ml-[20px]">Cinewiki</motion.div>}
        </div>
        {/* nav */}
        <div className="flex flex-col items-center">
          <motion.div className="my-8 cursor-pointer h-[30px] flex justify-center">
            {/* <img className="" src="/assets/img/search.png" /> */}
            {isOpen ? (
              <div className="flex w-full bg-white rounded-xl">
                <img className="" src="/assets/img/search.png" />
                <input
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="px-3 py-2 placeholder-gray text-gray-900 bg-white border-none focus:outline-none"
                  placeholder="search"
                />
              </div>
            ) : (
              <img className="" src="/assets/img/search.png" />
            )}
          </motion.div>
          {Nav.map((item) => (
            <motion.div
              whileHover={{ scale: 1.3, backgroundColor: '#f7f7f7' }}
              whileTap={{ scale: 1 }}
              onClick={(e) => {
                e.stopPropagation()
                onClickBtn(item.number)
                setIsOpen(false)
                setPreItem(item)
              }}
              onMouseOver={() => {
                setSelected(item)
              }}
              onMouseOut={() => {
                setSelected(preItem)
              }}
              className="flex justify-start mb-8 cursor-pointer relative p-[3px] rounded-md"
            >
              <img className="w-[30px] h-[30px]" src={item.src} />
              {item === selected ? <UnderLine /> : null}
              {isOpen && <motion.div className="text-md font-bold ml-[10px]">{item.label}</motion.div>}
            </motion.div>
          ))}

          {isOpen ? (
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
              <img src="/assets/img/left.png" />
            </motion.div>
          ) : (
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
              <img src="/assets/img/right.png" />
            </motion.div>
          )}
        </div>
      </motion.div>
      <Outlet />
    </div>
  )
}

export default Layout
