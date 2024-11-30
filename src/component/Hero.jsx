import './hero.css'
function Hero() {
  return (
    <div>
        <div className="herobanner">
            <h1>Hi I'm <a  className="name">Assim SENANI</a>,
              <div> a Computer Science Student</div>
            </h1>
            <h2>
              I would like to specialize in <a  className="name">front-end</a> and<a  className="name"> website architecture/design.</a>
          </h2>
        </div>
        <div className='boutton'>
          <div className="scrollbutton">
            <a href="#formations">DISCOVER ME</a>
          </div>
          <div className="dowloadbutton">
            <a href="#skills">GET MY CV</a>
          </div>
        </div>
    </div>
  );
}
export default Hero;