import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>By Assim Senani</h1>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/assim-senani-748b4a265/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/KVJJJJ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Github
              </a>
            </li>
            <li>
              <a href="mailto:assim.s@orange.fr">
                <i className="fas fa-envelope"></i> assim.s@orange.fr
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Assim Senani - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
