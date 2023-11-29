import React from 'react'
import Image from 'next/image'
import cat from '@/app/images/cat.jpg'
import dog from '@/app/images/dog.jpg'
import AnimatableDiv from '../AnimatableDiv'

const BackgroundSection = () => {
  return (
    <div
      id="background"
      className="screen-height-minus-navbar test flex items-center justify-center"
    >
      <div className="relative w-8/12 h-[90%]">
        <AnimatableDiv className="absolute top-0 right-0 animate-fade-left">
          <div className="flex items-center">
            <p>boiler text</p>
            <Image src={cat} alt="cat" width={350} height={220} />
          </div>
        </AnimatableDiv>
        <AnimatableDiv className="absolute bottom-0 left-0 animate-fade-right">
          <div className="flex items-center">
            <Image src={dog} alt="dog" width={450} height={350} />
            <p>boiler text</p>
          </div>
        </AnimatableDiv>
      </div>
    </div>
  )
}

export default BackgroundSection
