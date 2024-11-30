import './App.css';
import Formation from './component/formation';
import btslogo from './assets/image.png';
import etnalogo from './assets/ETNA.png';
import Header from './component/header';
import Hero from './component/Hero';
import './component/formation.css';
import Skills from './component/skills';
import Projects from './component/projects';
import linkyyimg from './assets/LINKYY_APP.png';
import drone from './assets/DRONE.png';
import DESIGN from './assets/DESIGN.png';
import ANNEXE from './assets/PROJET-ANEX.png';
import Footer from './component/footer';
import Formation2 from './component/formation2';
import Projects2 from './component/Project2'
import Skills2 from './component/skills2';

function App() {

  return (
    <div id='home' className="App">
      <Header />
      <Hero />      
        <div id='formations'>
          <Formation2/>
            <Formation img={btslogo} alt="avatar" name="BTS SNIR" date="2022-2024" description="Graduated of a BTS SNIR, now known as CIEL. I was trained in web development using HTML and CSS, as well as C++ and network system administration." link="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-cybersecurite-informatique-et-reseaux-electronique-option-a-informatique-et-reseaux"/>
            <Formation img={etnalogo} alt="avatar" name="ETNA" date="2024-2026" description="I am currently pursuing a Bachelor's degree in IS Project Design at ETNA, where I am also training in IT development." link="https://etna.io/formation/cycle-bachelor3/"/>
        </div>
            <br/>
            <br/>
            <br/>
        <div id='skills'>
          <Skills2/>
          <Skills/>
        </div>
        <div id='Projects'>
          <Projects2/>
          <div className='Card'>
          <Projects projects="LinkyApp" image={linkyyimg} description="Project to develop a mobile application for tracking and managing electricity consumption and customer accounts." repo="https://github.com/KVJJJJ/LINKYY-APP"/>
          <Projects projects="DRONE" image={drone} description="This project was a website that I created to help me learn HTML and CSS." repo="https://github.com/KVJJJJ/Drone-WEBSITE"/>
          </div>
          <div className='Card2'>
          <Projects projects="DESIGN" image={DESIGN} description="Here, you'll find design projects, commissioned works, and personal projects." repo="https://github.com/KVJJJJ/DESIGN"/>
          <Projects projects="ANNEX" image={ANNEXE} description="Here are some of the projects we worked on during the ETNA pool." repo="https://github.com/KVJJJJ/Projet-Annex"/>
          </div>
        </div>
            <br/>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
