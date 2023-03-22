import MyLogo from "./assets/MyLogo.jpg";
import LinkedIn from "./assets/LinkedIn.jpg"
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
       
      <header>
      <img src={MyLogo}  alt=""/>
        <div className='navLinks'>
        <a href="#for-home">Home</a>
        <a href="#for-about">About</a>
        <a href="#for-contact">Contact</a>
        <a href="#for-projects">Project</a>
        </div>
      </header>
      <main>
      <Home />
      <About />
      <Project />
      <Contact />
      </main>
      <footer>
        <div className="social">
        <a href="https://www.linkedin.com/in/aisha-asila-ahmed-02aa66217" target = "_blank"></a>
        
        </div>
        <p>&copy; Aisha Asila Ahmed</p>
      </footer>
    </div>
  )
}

export default App
