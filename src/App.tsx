import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Methodology } from './components/sections/Methodology'
import { Results } from './components/sections/Results'
import { Team } from './components/sections/Team'
import { Contact } from './components/sections/Contact'
import { Analytics } from './components/analytics/Analytics'
import { ThemeProvider } from './context/ThemeContext'
import { GrowingPlant } from './components/layout/GrowingPlant'
import { HorizontalScroll } from './components/sections/HorizontalScroll'

function App() {
  return (
    <ThemeProvider>
      <Analytics />
      <Navbar />
      <GrowingPlant />
      <main>
        <Hero />
        <About />
        <Methodology />
        <HorizontalScroll />
        <Results />
        <Team />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
