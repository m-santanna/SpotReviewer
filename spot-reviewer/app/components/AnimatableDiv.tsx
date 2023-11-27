'use client'
import { motion } from 'framer-motion'

const AnimatableDiv = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <motion.div className={className}>{children}</motion.div>
}

export default AnimatableDiv
