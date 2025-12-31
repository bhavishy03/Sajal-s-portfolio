import Navbar from './components/Navbar '
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection '
import Experince from './components/ExperinceSection'
import SkillsSection from './components/SkillsSection.jsx'
import EducationSection from './components/EducationSection .jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer .jsx'
function App() {
  return (
    <div className='w-full overflow-x-hidden bg-[#fbfbfb] selection:bg-yellow-400 selection:text-black'>
      <Navbar/>
      <main className="flex flex-col">
      <HeroSection/>
      <AboutSection/>
       <EducationSection/>
      <SkillsSection/>
      <Experince/>
      <ContactSection/>
      </main>
      <Footer/>
    </div>
  
  )
}

export default App