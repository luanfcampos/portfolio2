import './index.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AboutSection } from './sections/About'
import { ContactSection } from './sections/Contact'
import { HeroSection } from './sections/Hero'
import { ProjectsSection } from './sections/Projects'
import { SkillsSection } from './sections/Skills'

function App() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-16 pt-6 sm:pt-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
