import React from 'react'
import AnimatableDiv from '../AnimatableDiv'

const ContactSection = () => {
  return (
    <div className="screen-height-minus-navbar flex justify-center items-center">
      <AnimatableDiv
        className="text-4xl font-bold animate-fade-up"
        offset="-100px"
      >
        CONTACT
      </AnimatableDiv>
    </div>
  )
}

export default ContactSection
