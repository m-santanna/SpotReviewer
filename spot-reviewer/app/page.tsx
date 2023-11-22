import BackgroundSection from './components/sections/BackgroundSection'
import VisionSection from './components/sections/VisionSection'
import PrototypeSection from './components/sections/PrototypeSection'
import ContactSection from './components/sections/ContactSection'
import LandingSection from './components/sections/LandingSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingSection />
      <VisionSection />
      <BackgroundSection />
      <PrototypeSection />
      <ContactSection />
    </div>
  )
}
