import './hero.css'
function Hero() {
  return (
    <div>
        <div className="herobanner">
            <h1>Hi I'm <a  className="name">Assim SENANI</a> 
              <div>Student In Computer Development</div>
            </h1>
            <h2>
              I Would Like To Specialize In Front-end And Website Architecture/Design.
          </h2>
        </div>
          <div className="scrollbutton">
            <a href="#formations">DISCOVER ME</a>
          </div>
        
    </div>
  );
}
export default Hero;