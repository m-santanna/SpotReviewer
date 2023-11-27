import React from 'react'
import Link from 'next/link'
import AnimatableDiv from '../AnimatableDiv'
const ContactSection = () => {
  return (
    <div className="screen-height-minus-navbar flex flex-col">
      <AnimatableDiv className="text-4xl font-bold animate-fade-up text-center mt-10">
        Contact us!
      </AnimatableDiv>
      <AnimatableDiv className="text-2xl animate-fade-up flex justify-center mt-20">
        <div>
          Email:{' '}
          <Link href="mailto:matheus.santanna03@gmail.com">
            matheus.santanna03@gmail.com
          </Link>
        </div>
      </AnimatableDiv>
    </div>
  )
}

export default ContactSection
