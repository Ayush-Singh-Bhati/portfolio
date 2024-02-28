
import './App.css';
import About from './componants/About';
import Contact from './componants/Contact';
import Home from './componants/Home';
import Navbar from './componants/Navbar';
import Projects from './componants/Projects';

function App() {
  return (
   <div>
    <Navbar/>
    <div id="home">  <Home/>  </div>
    <div id="about">  <About/>   </div>
    <div id="projects">  <Projects/>   </div>
    <div id="contact">  <Contact/>   </div>
   </div>
  ); 
}

export default App;
