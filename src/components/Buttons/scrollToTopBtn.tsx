import { motion } from 'framer-motion'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="text-center p-5 fixed bottom-10 right-10 bg-primary-100 text-white text-lg font-bolder rounded-full shadow-lg z-50"
    >
      Top
    </motion.button>
  )
}

export default ScrollToTopButton
