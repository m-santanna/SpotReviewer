'use client'
import React, { useRef, useState, useEffect } from 'react'

interface ScrollAnimatedProps {
  className: string
  children: React.ReactNode
  offset?: string
}

const useScrollAnimation = (
  elementRef: React.RefObject<HTMLDivElement>,
  threshold: number,
  offset: string = '0px'
) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: offset,
      threshold,
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [elementRef, threshold, offset])

  return isVisible
}

const AnimatableDiv: React.FC<ScrollAnimatedProps> = ({
  className,
  children,
  offset,
}) => {
  const animatedElementRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(animatedElementRef, 0.5, offset)

  return (
    <div
      ref={animatedElementRef}
      className={`${isVisible ? className : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}

export default AnimatableDiv
