import './App.css'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import ContactMe from './components/ContactMe.jsx'
import Skills from './components/Skills.jsx'
import WhyMe from './components/WhyMe.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <Skills />
    <WhyMe />
    <Projects />
    <ContactMe />
    <Footer/>
    </>
  )
}

export default App
