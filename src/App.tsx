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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Results />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
