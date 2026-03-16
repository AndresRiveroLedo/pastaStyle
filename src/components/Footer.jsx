import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top" style={{ alignItems: 'flex-start' }}>
        <div className="footer__brand">
          <span className="footer__logo">PASTA STYLE</span>
          <p className="footer__tagline">The pasta that hits different.</p>
        </div>

        <div className="footer__contact-center">
          <h4 className="footer__col-title">LOCATION</h4>
          <div className="footer__contact-info">
            <p>6941 Southwest 196th Avenue, Suite 5</p>
            <p>Miami, FL 33157</p>
            <div className="footer__contact-methods" style={{ marginTop: '14px' }}>
              <p>📞 (305) 555-0123</p>
              <p>✉️ info@pastastyle.com</p>
            </div>
          </div>
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
            <h4 className="footer__col-title">FOLLOW US</h4>
            <div className="footer__social" style={{ marginTop: '15px' }}>
              <a 
                href="https://www.instagram.com/pastastyle_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-btn footer__social-btn--instagram"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://www.tiktok.com/@pasta_style?_r=1&_t=ZP-94jzgQIVQBb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-btn footer__social-btn--tiktok"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
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
