
import './App.css'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <ContactMe />
    <Footer/>
    </>
  )
}

export default App
