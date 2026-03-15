import { useState } from 'react'
import './TopBar.css'

const topLinks = [
  { label: 'MENU', href: '#menu', id: 'top-menu' },
  { label: 'ABOUT', href: '#footer', id: 'top-about' },
  { label: 'CONTACT', href: '#big-orders', id: 'top-contact' },
  { label: 'GALLERY', href: '/gallery', id: 'top-gallery' },
]

export default function TopBar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="topbar">
        {/* Logo — left */}
        <div className="topbar__logo">PASTA STYLE</div>

        {/* Nav links — center (desktop only) */}
        <nav className="topbar__nav--desktop" aria-label="Top navigation">
          {topLinks.map(link => (
            <a key={link.id} href={link.href} className="topbar__nav-link" id={link.id}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="topbar__right">
          <a href="https://order.toasttab.com/online/pasta-style-restaurant-ghost-kitchen-6941-southwest-196th-avenue-suite-5" target="_blank" rel="noopener noreferrer" className="topbar__cta" id="topbar-cta-btn">ORDER NOW! 🔥</a>
          <button
            className={`topbar__burger ${open ? 'topbar__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            id="topbar-burger"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu__header">
            <span className="mobile-menu__logo">PASTA STYLE</span>
            <button className="mobile-menu__close" onClick={close} aria-label="Close menu">✕</button>
          </div>

          <nav className="mobile-menu__links">
            {topLinks.map(link => (
              <a key={link.id} href={link.href} className="mobile-menu__link" onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <a href="https://order.toasttab.com/online/pasta-style-restaurant-ghost-kitchen-6941-southwest-196th-avenue-suite-5" target="_blank" rel="noopener noreferrer" className="mobile-menu__cta" onClick={close}>ORDER NOW</a>
          </div>
        </div>
      )}
    </>
  )
}
