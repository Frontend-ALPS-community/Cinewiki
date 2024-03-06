import { motion } from 'framer-motion'

const UnderLine: React.FC = () => {
  return <motion.div className="bg-black absolute -bottom-1 h-[3px] left-0 right-0 z-50" layoutId="underline" />
}

export default UnderLine
