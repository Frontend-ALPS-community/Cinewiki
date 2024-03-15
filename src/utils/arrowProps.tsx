import React from 'react'
import { ArrowRightIcon } from '../components/Icons/arrow-right'
import { ArrowLeftIcon } from '../components/Icons/arrow-left'

interface ArrowProps {
  onClick?: () => void
  className?: string
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div className={`absolute z-10 p-3 bg-gray-100 ${className}`} onClick={onClick}>
    <ArrowRightIcon />
  </div>
)

export const PrevArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div className={`absolute z-10 p-3 bg-gray-100 ${className}`} onClick={onClick}>
    <ArrowLeftIcon />
  </div>
)
