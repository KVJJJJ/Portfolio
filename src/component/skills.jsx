import './skills.css';

function Skills() {
  return (
    <div className="skills-container">
        <div className="dowloadbutton2">
                <a href="/CV_Assim_SENANI.pdf" download="Assim_Senani_CV.pdf">DOWNLOAD CV</a>
            </div>
        <div className="card_comp">
            <div className="skill-card">
                <h2>Web Development</h2>
                <div className="skill-description">
                    <div className="skill-item">
                        <i className="fab fa-html5"></i> <h3>HTML</h3>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-css3-alt"></i> <h3>CSS</h3>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-js-square"></i> <h3>JavaScript</h3>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-react"></i> <h3>React</h3>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-php"></i> <h3>PHP</h3>
                    </div>
                    <div className="skill-item">
                        <i className="fas fa-database"></i> <h3>SQL</h3>
                    </div>
                </div>
            </div>

            <div className="skill-card">
                <h2>Web Design</h2>
                <br/>
                <br/>
                <div className="skill-description">
                    <div className="skill-item">
                        <i className="fab fa-figma"></i> <h3>Figma</h3>
                    </div>
                    <div className="skill-item">
                        <i className="logos--adobe-photoshop"></i> <h3>Photoshop</h3>
                    </div>
                    <div className="skill-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="skills__icon"
                        fill="#00c4cc" 
                      >
                        <path d="M24 12a10.5 10.5 0 0 1-14.978 9.518 7.13 7.13 0 0 0 1.305-2.394 7.13 7.13 0 0 0 4.845 1.306 7.13 7.13 0 0 0 1.856-.477 10.503 10.503 0 0 1 0-16.95 7.13 7.13 0 0 0-1.856-.477 7.13 7.13 0 0 0-4.845 1.306 7.13 7.13 0 0 0-1.305-2.394A10.5 10.5 0 1 1 24 12z" />
                      </svg>
                      <h3>Canva</h3>
                    </div>

                    <div className='skill-item'>
                      <i className="logos--adobe-illustrator"></i> <h3>Illustrator</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
