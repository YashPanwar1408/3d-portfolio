import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import AppShowcase from "./sections/ShowcaseSection"
import Experience from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AppShowcase/>
   {/* <LogoSection/> */}
   <FeatureCards/>
   <Experience/>
   <TechStack/>
   <Testimonials/>
   <Contact />
    <Footer />
   </>
  )
}

export default App
