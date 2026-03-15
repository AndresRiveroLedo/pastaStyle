import './Navbar.css'

const navLinks = [
  { label: 'MENU', href: '#menu', id: 'nav-menu' },
  { label: 'ABOUT', href: '#footer', id: 'nav-about' },
  { label: 'LOCATIONS', href: '#pasta-cities', id: 'nav-cities' },
  { label: 'GALLERY', href: '/gallery', id: 'nav-gallery' },
]

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar" aria-label="Main navigation">

      {/* Logo — left */}
      <a href="#hero" className="navbar__brand" id="nav-brand">PASTA STYLE</a>

      {/* Links — center */}
      <div className="navbar__center">
        {navLinks.map(link => (
          <a key={link.id} href={link.href} className="navbar__link" id={link.id}>
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA — right */}
      <a href="https://order.toasttab.com/online/pasta-style-restaurant-ghost-kitchen-6941-southwest-196th-avenue-suite-5" target="_blank" rel="noopener noreferrer" className="navbar__cta" id="nav-order">ORDER NOW</a>

    </nav>
  )
}
