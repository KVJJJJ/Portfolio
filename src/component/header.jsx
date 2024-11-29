import './header.css';

function Header({ isHidden }) {
  return (
    <header className={isHidden ? 'hidden' : ''}>
      <div className="items">
        <h2>Assim Senani</h2>
        <div className="nav-links">
          <a href="#formations"><h2>Formations</h2></a>
          <a href="#skills"><h2>Skills</h2></a>
          <a href="#Projects"><h2>Projets</h2></a>
          <a href="#contact"><h2>Contact</h2></a>
          <a href="https://github.com/KVJJJJ" target='_blank' className="github-link">
            <i className="fab fa-github github-icon"></i><h2>GitHub</h2>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
