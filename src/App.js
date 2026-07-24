// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skill from './components/Skill';
import SkillsBar from './components/SkillsBar';
import Stats from './components/Stats';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <Hero />
      <SkillsBar />
      <Stats />
      <About />
      <Skill />
      <Projects/>
      <Contact />
      <Footer/>
    </div>

    // <body>
    //    <Navbar />
    //    <Hero />
    //    <SkillsBar />
    //    <Stats />
    //    <About />
    //    <Skill />
    //    <Contact />
    // </body>
  );
}

export default App;
