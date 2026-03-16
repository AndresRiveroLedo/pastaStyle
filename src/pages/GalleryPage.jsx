import { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

const allMedia = [
  { type: 'image', src: '/dish_caesar_salad.png', alt: 'Caesar Salad' },
  { type: 'image', src: '/dish_caponata_mozzarella.png', alt: 'Caponata & Mozzarella' },
  { type: 'image', src: '/dish_meatballs.png', alt: 'Italian Meatballs' },
  { type: 'video', src: '/pasta_style_header.mp4', alt: 'Urban Pasta Vibe' },
  { type: 'image', src: '/dish_spaghetti_pomodoro.png', alt: 'Spaghetti Pomodoro' },
  { type: 'image', src: '/dish_fettuccine_alfredo.png', alt: 'Chicken Fettuccine Alfredo' },
  { type: 'image', src: '/dish_bolognese.png', alt: 'Radiatori Bolognese' },
  { type: 'image', src: '/dish_gnocchi_pesto.png', alt: 'Gnocchi Pesto' },
  { type: 'image', src: '/dish_lasagna.png', alt: 'Meat Lasagna' },
  { type: 'video', src: '/copy_EDD825FF-AA69-49B3-A48D-EA9DA1A8BFD7.mp4', alt: 'Pasta Close-up' },
  { type: 'image', src: '/dish_gnocchi_sorrentina.png', alt: 'Gnocchi Sorrentina' },
  { type: 'image', src: '/dish_tagliatelle_montanara.png', alt: 'Tagliatelle Montanara' },
  { type: 'image', src: '/dish_amatriciana.png', alt: 'Radiatori Amatriciana' },
  { type: 'image', src: '/menu_carne.png', alt: 'Chicken Lemon & Capers' },
  { type: 'image', src: '/menu_pasta_fresca.png', alt: 'Pasta Fresca' },
  { type: 'image', src: '/menu_antipasti.png', alt: 'Antipasti' },
  { type: 'image', src: '/amatriciana.png', alt: 'Amatriciana' },
  { type: 'image', src: '/cacio_pepe.png', alt: 'Cacio e Pepe' },
  { type: 'image', src: '/carbonara.png', alt: 'Carbonara' },
  { type: 'image', src: '/PS Brand Basket.JPEG', alt: 'PS Brand Basket' },
  { type: 'image', src: '/PS Brand Basket 2.JPEG', alt: 'PS Brand Basket 2' },
  { type: 'image', src: '/PS brand skater 1.JPEG', alt: 'PS Brand Skater 1' },
  { type: 'image', src: '/PS brand skater 2.JPEG', alt: 'PS Brand Skater 2' },
  { type: 'video', src: '/5bcebe8d3c32414784a15a66e6848e7c.mov', alt: 'Slow Pasta' },
  { type: 'image', src: '/1861AAB6-3F7C-4696-B07A-56F2B1A18217.jpeg', alt: 'Pasta Detail' },
  { type: 'image', src: '/F9FE2633-22EE-4FA3-A4EA-34AC962B6CCA.jpeg', alt: 'Pasta Plate' },
  { type: 'video', src: '/v15044gf0000d5cnem7og65vbo790utg.mp4', alt: 'Kitchen Energy' },
  { type: 'video', src: '/ba9545073d2048999e38949015abdeb8.mov', alt: 'Action Shot' },
  { type: 'image', src: '/CA4BF388-5789-4BB0-8729-FCCECEBFA8F2.jpeg', alt: 'Pasta Bowl' },
  { type: 'video', src: '/v15044gf0000d6fj5gfog65qhft3tjd0.mp4', alt: 'Pasta Pour' },
  { type: 'image', src: '/BEC9B6EE-580D-41C6-A85D-87587A0F478D.jpeg', alt: 'Fresh Ingredients' },
  { type: 'image', src: '/3391D958-D026-4800-82E0-B6A878CF29BB.jpeg', alt: 'Gourmet Pasta' },
  { type: 'video', src: '/aeb1150a7164431680db2dca2f086f8b.mov', alt: 'Steam Shot' },
  { type: 'image', src: '/19877D71-7FA8-4BE3-BEA8-6863582D9948.jpeg', alt: 'Italian Roots' },
  { type: 'image', src: '/F61BC01F-161E-482D-A382-0EFE443C6114.jpeg', alt: 'Traditional Dish' },
  { type: 'video', src: '/copy_D2543DDE-463D-465E-BF3B-D9E7742CB2B2.mov', alt: 'Pasta Style Look' },
  { type: 'image', src: '/D7357DAD-2999-4E31-A338-0CDACC8B7AFD.jpeg', alt: 'Dinner Table' },
  { type: 'image', src: '/0632E0B3-2426-4548-8983-7E610197F6B8.jpeg', alt: 'Pasta Close' },
  { type: 'video', src: '/1dd4c7aa49764055aa70870c26a83223.mov', alt: 'Chef Skill' },
  { type: 'image', src: '/68572761-199E-40EF-9870-50356BEC1AE0.jpeg', alt: 'Italian Flavor' },
  { type: 'image', src: '/58F1E806-4A19-4E74-BD1D-E5B4690551F0.jpeg', alt: 'Handmade Pasta' },
  { type: 'video', src: '/copy_1C0CC565-10EA-4F37-9BCC-0DF5525C7820.mov', alt: 'Sizzling Sauce' },
  { type: 'image', src: '/04D0F2BF-C44D-4809-9D40-81CF8387E366.jpeg', alt: 'Al Dente' },
  { type: 'image', src: '/4229935B-B396-4B68-A648-A59EC518BEC9.jpeg', alt: 'Plating' },
  { type: 'image', src: '/DD08304F-13B6-4ED5-BAB1-9828F0364B07.jpeg', alt: 'Pasta Art' },
  { type: 'image', src: '/FE896465-F08B-4012-8134-7A7000E35273.jpeg', alt: 'Final Touch' },
]


const ITEMS_PER_CAROUSEL = 8

const carouselConfigs = [
  { direction: 'forward', speed: 0.35 },
  { direction: 'backward', speed: 0.3 },
  { direction: 'forward', speed: 0.25 },
  { direction: 'backward', speed: 0.4 },
  { direction: 'forward', speed: 0.3 },
  { direction: 'backward', speed: 0.35 },
  { direction: 'forward', speed: 0.28 },
  { direction: 'backward', speed: 0.32 },
]

function Carousel({ items, config }) {
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const animationRef = useRef(null)
  const lastInteractionRef = useRef(0)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)
  const initialized = useRef(false)

  const infiniteItems = useMemo(() => [...items, ...items, ...items], [items])

  useEffect(() => {
    if (!trackRef.current || initialized.current) return

    const track = trackRef.current
    initialized.current = true
    
    const initScroll = () => {
      if (track.scrollWidth > track.clientWidth) {
        track.scrollLeft = track.scrollWidth / 3
      }
    }

    setTimeout(initScroll, 50)
  }, [])

  useEffect(() => {
    if (!trackRef.current || isPaused) return

    const track = trackRef.current
    const { direction, speed } = config

    const animate = () => {
      if (!track || isPaused) return

      const scrollWidth = track.scrollWidth
      const middlePoint = scrollWidth / 3

      // Scroll infinito con triplicado para desktop y mobile
      if (direction === 'forward') {
        if (track.scrollLeft >= middlePoint * 2 - speed * 2) {
          track.scrollLeft = middlePoint
        } else {
          track.scrollLeft += speed
        }
      } else {
        if (track.scrollLeft <= middlePoint + speed * 2) {
          track.scrollLeft = middlePoint * 2
        } else {
          track.scrollLeft -= speed
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [config, isPaused])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
    scrollStartX.current = trackRef.current.scrollLeft
    setIsPaused(true)
    lastInteractionRef.current = Date.now()
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return
    const deltaX = e.clientX - dragStartX.current
    trackRef.current.scrollLeft = scrollStartX.current - deltaX
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    lastInteractionRef.current = Date.now()
    setTimeout(() => {
      if (Date.now() - lastInteractionRef.current >= 5000) {
        setIsPaused(false)
      }
    }, 5000)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      lastInteractionRef.current = Date.now()
      setTimeout(() => {
        if (Date.now() - lastInteractionRef.current >= 5000) {
          setIsPaused(false)
        }
      }, 5000)
    }
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    dragStartX.current = e.touches[0].clientX
    scrollStartX.current = trackRef.current.scrollLeft
    setIsPaused(true)
    lastInteractionRef.current = Date.now()
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const deltaX = e.touches[0].clientX - dragStartX.current
    trackRef.current.scrollLeft = scrollStartX.current - deltaX
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    lastInteractionRef.current = Date.now()
    setTimeout(() => {
      if (Date.now() - lastInteractionRef.current >= 5000) {
        setIsPaused(false)
      }
    }, 5000)
  }

  return (
    <div className="carousel">
      <div 
        className="carousel__track" 
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {infiniteItems.map((item, index) => (
          <div key={index} className="carousel__item">
            {item.type === 'video' ? (
              <video 
                src={item.src} 
                alt={item.alt}
                className="carousel__media"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img src={item.src} alt={item.alt} className="carousel__media" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const mediaItems = useMemo(() => {
    const shuffled = [...allMedia]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [])
  
  const carousels = useMemo(() => {
    const result = []
    const totalItems = mediaItems.length
    
    // Minimum items should be at least as many as visible in CSS (6)
    const minItems = 7
    
    let currentChunk = []
    for (let i = 0; i < totalItems; i++) {
      currentChunk.push(mediaItems[i])
      
      if (currentChunk.length >= ITEMS_PER_CAROUSEL) {
        result.push(currentChunk)
        currentChunk = []
      }
    }
    
    // Handle the remainder
    if (currentChunk.length > 0) {
      if (currentChunk.length < minItems && result.length > 0) {
        // Distribute to the last carousel
        result[result.length - 1] = [...result[result.length - 1], ...currentChunk]
      } else {
        result.push(currentChunk)
      }
    }
    
    return result
  }, [mediaItems])

  return (
    <div className="gallery-page">
      <nav className="gallery-page__nav">
        <Link to="/" className="gallery-page__back">← BACK TO HOME</Link>
      </nav>
      
      <header className="gallery-page__header">
        <h1 className="gallery-page__title">GALLERY</h1>
      </header>

      <div className="gallery-page__carousels">
        {carousels.map((items, index) => (
          <Carousel 
            key={index} 
            items={items}
            config={carouselConfigs[index % carouselConfigs.length]}
          />
        ))}
      </div>

      <footer className="footer" id="gallery-footer">
        <div className="footer__top" style={{ alignItems: 'flex-start' }}>
          <div className="footer__brand">
            <span className="footer__logo">PASTA STYLE</span>
            <p className="footer__tagline">The pasta that hits different.</p>
          </div>

          <div className="gallery-page__contact-center">
            <h4 className="footer__col-title">LOCATION</h4>
            <div className="gallery-page__contact-info">
              <p>6941 Southwest 196th Avenue, Suite 5</p>
              <p>Miami, FL 33157</p>
              <div className="gallery-page__contact-methods" style={{ marginTop: '14px' }}>
                <p>📞 (305) 555-0123</p>
                <p>✉️ info@pastastyle.com</p>
              </div>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__col-title">GALLERY</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#gallery-footer">Contact</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">FOLLOW US</h4>
              <div className="gallery-page__social" style={{ marginTop: '15px' }}>
                <a 
                  href="https://www.instagram.com/pastastyle_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gallery-page__social-btn gallery-page__social-btn--instagram"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@pasta_style?_r=1&_t=ZP-94jzgQIVQBb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gallery-page__social-btn gallery-page__social-btn--tiktok"
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
          </div>
        </div>
      </footer>
    </div>
  )
}
