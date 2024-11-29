import './App.css';
import { useState, useEffect, useRef  } from 'react';
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
import Barnav from './component/barnav';
function App() {
  // const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  // const formationsRef = useRef(null); // Reference vers la section "Formations"

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (formationsRef.current) {
  //       const formationsTop = formationsRef.current.getBoundingClientRect().top;
  //       // Masquer le header lorsque le haut de la section "Formations" atteint le haut de la fenêtre
  //       if (formationsTop <= 0) {
  //         setIsHeaderHidden(true);
  //       } else {
  //         setIsHeaderHidden(false);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
        <Header />
        <Hero />
        <div className="two-column-layout">
        {/* <div className="main-container"> */}
          {/* <Barnav /> */}
          {/* <div className="content"> */}
         
        
        <div id='formations'>
        <h1>Formations</h1>
          <br/>
          <br/>
          <Formation img={btslogo} alt="avatar" name="BTS SNIR" date="2022-2024" description="Graduate of a BTS SNIR now called CIEL at the Lycée Louis Armand I was trained in web development with HTML CSS a little C++ and network system administration." link="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-cybersecurite-informatique-et-reseaux-electronique-option-a-informatique-et-reseaux"/>
          <Formation img={etnalogo} alt="avatar" name="ETNA" date="2024-2026" description="I'm studying for a Bachelor 3 in IS Project Design at Etna and I'm training in IT development." link="https://etna.io/formation/cycle-bachelor3/"/>
        </div>
        <br/>
        <br/>
        <br/>
        <div id='skills'>
          <h1>Skills</h1>
        <Skills/>
        </div>
        <br/>
        <br/>
        <br/>
        <h1>Projects</h1>
        <div id='Projects'>
          <Projects projects="LinkyyApp" image={linkyyimg} description="Project to create amobile application to track and manage electricity consumption and customer accounts." repo="https://github.com/KVJJJJ/LINKYY-APP"/>
          <Projects projects="DRONE" image={drone} description="This project was a website, I had to create it to help me to learn HTML & CSS" repo="https://github.com/KVJJJJ/Drone-WEBSITE"/>
          <Projects projects="DESIGN" image={DESIGN} description="Here you'll find design projects, commissions and personal projects." repo="https://github.com/KVJJJJ/DESIGN.gitE"/>
          <Projects projects="ANEX" image={ANNEXE} description="Here are some of the projects we did in the pool of the Etna" repo="https://github.com/KVJJJJ/Projet-Annex"/>
        </div>
        <br/>
        <Footer />
        </div>
      </div>
    // </div>
  );
}

export default App;
