import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
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

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchWord = inputRef.current?.value
    navigate(`/search/${searchWord}`)
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
          setIsOpen(!isOpen)
        }}
      >
        {/* 로고 */}

        <div className="flex justify-center items-center mt-[30px]">
          {isOpen ? (
            <img
              onClick={(e) => {
                onClickBtn(1)
                setSelected(Nav[0])
              }}
              className="cursor-pointer w-full max-w-[245px] h-[103px]"
              src="/assets/images/logofull.png"
            />
          ) : (
            <img
              onClick={(e) => {
                e.stopPropagation()
                onClickBtn(1)
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
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="p-2 placeholder-gray text-gray-900 bg-white border-none focus:outline-none"
                  placeholder="search"
                  ref={inputRef}
                />
              </form>
            ) : (
              <Search />
            )}
          </motion.div>
          {Nav.map((item) => (
            <motion.div
              whileHover={{ scale: 1.3 }}
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
              <img src="/assets/images/left.png" />
            </motion.div>
          ) : (
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
              <img src="/assets/images/right.png" />
            </motion.div>
          )}
        </div>
      </motion.div>
      <Outlet />
    </div>
  )
}

export default Layout
