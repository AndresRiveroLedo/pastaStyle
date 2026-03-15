import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__logo">PASTA STYLE</span>
          <p className="footer__tagline">The pasta that hits different.</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">MENU</h4>
            <ul>
              <li><a href="#menu">Spaghetti Pomodoro</a></li>
              <li><a href="#menu">Meat Lasagna</a></li>
              <li><a href="#menu">Radiatori Amatriciana</a></li>
              <li><a href="#menu">Gnocchi Pesto</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">COMPANY</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Join Us</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">FOLLOW US</h4>
            <ul>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 PASTA STYLE. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#" id="footer-lang-toggle">ES / EN</a>
        </div>
      </div>
    </footer>
  )
}
