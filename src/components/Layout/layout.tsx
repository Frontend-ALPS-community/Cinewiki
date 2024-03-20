import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { search } from '../../atoms/searchAtom'
import { Nav, NavBar } from '../../types/type'
import { Search } from '../Icons/search'
import UnderLine from '../Underline/underline'

const Layout = () => {
  // 조건부스타일
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [selected, setSelected] = useState<NavBar>(Nav[0])
  const [preItem, setPreItem] = useState<NavBar>(Nav[0])
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchWord, setSearchWord] = useRecoilState(search)

  const onClickBtn = (path: string) => {
    navigate(path)
  }

  const onSearch = () => {
    navigate(`/search?word=${inputRef?.current?.value}`)
    window.location.reload()
  }

  return (
    <div className="">
      {/* 딤드 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black fixed w-full h-full z-30 top-0"
            initial={{ opacity: '0' }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="bg-primary-100 h-screen fixed top-0 z-40"
        layout
        initial={{ width: '122px' }}
        transition={{ duration: 0.3 }}
        animate={{ width: isOpen ? '330px' : '122px' }}
        onHoverStart={() => setIsHovered(!isHovered)}
        onHoverEnd={() => setIsHovered(!isHovered)}
        onClick={() => {
          // setIsOpen(!isOpen)
        }}
      >
        {/* 로고 */}

        <div className="flex justify-center items-center mt-[30px]">
          {isOpen ? (
            <img
              onClick={() => {
                navigate('/')
                setSelected(Nav[0])
              }}
              className="cursor-pointer w-full max-w-[245px] h-[103px]"
              src="/assets/images/logofull.png"
            />
          ) : (
            <img
              onClick={() => {
                navigate('/')
              }}
              className="cursor-pointer w-[60px] h-[60px]"
              src="/assets/images/logo.png"
            />
          )}
        </div>
        {/* nav */}
        <div className="flex flex-col items-center">
          <motion.div className="my-8 cursor-pointer h-[30px] flex justify-center">
            {isOpen ? (
              <form onSubmit={onSearch} className="flex w-full bg-white rounded-lg">
                <img className="pl-2" src="/assets/images/search.png" />
                <input
                  className="p-2 placeholder-gray text-gray-900 bg-white border-none focus:outline-none"
                  placeholder="search"
                  name="word"
                  ref={inputRef}
                />
                <button>검색</button>
              </form>
            ) : (
              <div onClick={() => setIsOpen(true)}>
                <Search />
              </div>
            )}
          </motion.div>
          {Nav.map((item) => (
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1 }}
              onClick={(e) => {
                e.stopPropagation()
                onClickBtn(item.path)
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

          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
          >
            <img src={isOpen ? '/assets/images/left.png' : '/assets/images/right.png'} />
          </motion.div>
        </div>
      </motion.div>
      <Outlet />
    </div>
  )
}

export default Layout
