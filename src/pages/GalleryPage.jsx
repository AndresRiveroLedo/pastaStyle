import { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

const allMedia = [
  { type: 'image', src: '/dish_caesar_salad.png', alt: 'Caesar Salad' },
  { type: 'image', src: '/dish_caponata_mozzarella.png', alt: 'Caponata & Mozzarella' },
  { type: 'image', src: '/dish_meatballs.png', alt: 'Italian Meatballs' },
  { type: 'video', src: '/pasta_style_header.mp4', alt: 'Pasta Style Header' },
  { type: 'video', src: '/dfcbd16b79104e4eaebb44e88eb6cf9b.mp4', alt: 'Video 1' },
  { type: 'image', src: '/dish_spaghetti_pomodoro.png', alt: 'Spaghetti Pomodoro' },
  { type: 'image', src: '/dish_fettuccine_alfredo.png', alt: 'Chicken Fettuccine Alfredo' },
  { type: 'image', src: '/dish_bolognese.png', alt: 'Radiatori Bolognese' },
  { type: 'image', src: '/dish_gnocchi_pesto.png', alt: 'Gnocchi Pesto' },
  { type: 'image', src: '/dish_lasagna.png', alt: 'Meat Lasagna' },
  { type: 'video', src: '/copy_EDD825FF-AA69-49B3-A48D-EA9DA1A8BFD7.mp4', alt: 'Video 2' },
  { type: 'image', src: '/dish_gnocchi_sorrentina.png', alt: 'Gnocchi Sorrentina' },
  { type: 'image', src: '/dish_tagliatelle_montanara.png', alt: 'Tagliatelle Montanara' },
  { type: 'video', src: '/pasta_style_header.MOV', alt: 'Pasta Style Header MOV' },
  { type: 'image', src: '/dish_amatriciana.png', alt: 'Radiatori Amatriciana' },
  { type: 'image', src: '/menu_carne.png', alt: 'Chicken Lemon & Capers' },
  { type: 'image', src: '/menu_pasta_fresca.png', alt: 'Pasta Fresca' },
  { type: 'image', src: '/menu_antipasti.png', alt: 'Antipasti' },
  { type: 'image', src: '/amatriciana.png', alt: 'Amatriciana' },
  { type: 'video', src: '/dfcbd16b79104e4eaebb44e88eb6cf9b.MOV', alt: 'Video 1 MOV' },
  { type: 'video', src: '/copy_EDD825FF-AA69-49B3-A48D-EA9DA1A8BFD7.MOV', alt: 'Video 2 MOV' },
  { type: 'image', src: '/cacio_pepe.png', alt: 'Cacio e Pepe' },
  { type: 'image', src: '/carbonara.png', alt: 'Carbonara' },
  { type: 'image', src: '/PS Brand Basket.JPEG', alt: 'PS Brand Basket' },
  { type: 'image', src: '/PS Brand Basket 2.JPEG', alt: 'PS Brand Basket 2' },
  { type: 'image', src: '/PS brand skater 1.JPEG', alt: 'PS Brand Skater 1' },
  { type: 'video', src: '/pasta_style_header.mp4', alt: 'Pasta Style Header 2' },
  { type: 'image', src: '/PS brand skater 2.JPEG', alt: 'PS Brand Skater 2' },
  { type: 'video', src: '/5bcebe8d3c32414784a15a66e6848e7c.mov', alt: 'Video Nuevo 1' },
  { type: 'image', src: '/1861AAB6-3F7C-4696-B07A-56F2B1A18217.jpeg', alt: 'Imagen iPhone 1' },
  { type: 'image', src: '/F9FE2633-22EE-4FA3-A4EA-34AC962B6CCA.jpeg', alt: 'Imagen iPhone 2' },
  { type: 'video', src: '/v15044gf0000d5cnem7og65vbo790utg.mp4', alt: 'Video Nuevo 2' },
  { type: 'video', src: '/ba9545073d2048999e38949015abdeb8.mov', alt: 'Video Nuevo 3' },
  { type: 'image', src: '/CA4BF388-5789-4BB0-8729-FCCECEBFA8F2.jpeg', alt: 'Imagen iPhone 3' },
  { type: 'image', src: '/CA4BF388-5789-4BB0-8729-FCCECEBFA8F2 2.jpeg', alt: 'Imagen iPhone 4' },
  { type: 'video', src: '/v15044gf0000d6fj5gfog65qhft3tjd0.mp4', alt: 'Video Nuevo 4' },
  { type: 'image', src: '/BEC9B6EE-580D-41C6-A85D-87587A0F478D.jpeg', alt: 'Imagen iPhone 5' },
  { type: 'image', src: '/3391D958-D026-4800-82E0-B6A878CF29BB.jpeg', alt: 'Imagen iPhone 6' },
  { type: 'video', src: '/aeb1150a7164431680db2dca2f086f8b.mov', alt: 'Video Nuevo 5' },
  { type: 'image', src: '/19877D71-7FA8-4BE3-BEA8-6863582D9948.jpeg', alt: 'Imagen iPhone 7' },
  { type: 'image', src: '/F61BC01F-161E-482D-A382-0EFE443C6114.jpeg', alt: 'Imagen iPhone 8' },
  { type: 'video', src: '/copy_EDD825FF-AA69-49B3-A48D-EA9DA1A8BFD7 2.mov', alt: 'Video Nuevo 6' },
  { type: 'video', src: '/copy_D2543DDE-463D-465E-BF3B-D9E7742CB2B2.mov', alt: 'Video Nuevo 7' },
  { type: 'image', src: '/D7357DAD-2999-4E31-A338-0CDACC8B7AFD.jpeg', alt: 'Imagen Nueva 1' },
  { type: 'image', src: '/0632E0B3-2426-4548-8983-7E610197F6B8.jpeg', alt: 'Imagen Nueva 2' },
  { type: 'video', src: '/1dd4c7aa49764055aa70870c26a83223.mov', alt: 'Video Nuevo 8' },
  { type: 'image', src: '/68572761-199E-40EF-9870-50356BEC1AE0.jpeg', alt: 'Imagen Nueva 3' },
  { type: 'image', src: '/58F1E806-4A19-4E74-BD1D-E5B4690551F0.jpeg', alt: 'Imagen Nueva 4' },
  { type: 'video', src: '/copy_1C0CC565-10EA-4F37-9BCC-0DF5525C7820.mov', alt: 'Video Nuevo 9' },
  { type: 'image', src: '/04D0F2BF-C44D-4809-9D40-81CF8387E366.jpeg', alt: 'Imagen Nueva 5' },
  { type: 'image', src: '/4229935B-B396-4B68-A648-A59EC518BEC9.jpeg', alt: 'Imagen Nueva 6' },
  { type: 'image', src: '/DD08304F-13B6-4ED5-BAB1-9828F0364B07.jpeg', alt: 'Imagen Nueva 7' },
  { type: 'image', src: '/FE896465-F08B-4012-8134-7A7000E35273.jpeg', alt: 'Imagen Nueva 8' },
]

const ITEMS_PER_CAROUSEL = 4

const carouselConfigs = [
  { direction: 'forward', speed: 0.3 },
  { direction: 'backward', speed: 0.3 },
  { direction: 'forward', speed: 0.3 },
  { direction: 'backward', speed: 0.3 },
  { direction: 'forward', speed: 0.3 },
  { direction: 'backward', speed: 0.3 },
  { direction: 'forward', speed: 0.3 },
  { direction: 'backward', speed: 0.3 },
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
  
  const carousels = []
  for (let i = 0; i < mediaItems.length; i += ITEMS_PER_CAROUSEL) {
    carousels.push(mediaItems.slice(i, i + ITEMS_PER_CAROUSEL))
  }

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

      <footer className="gallery-page__footer">
        <div className="gallery-page__contact">
          <h2 className="gallery-page__contact-title">CONTACT</h2>
          <p className="gallery-page__contact-text">PASTA STYLE</p>
          <p className="gallery-page__contact-text">6941 Southwest 196th Avenue, Suite 5</p>
          <p className="gallery-page__contact-text">Miami, FL 33157</p>
          <p className="gallery-page__contact-text">📞 (305) 555-0123</p>
          <p className="gallery-page__contact-text">✉️ info@pastastyle.com</p>
          <div className="gallery-page__social">
            <a href="#" className="gallery-page__social-link">Instagram</a>
            <a href="#" className="gallery-page__social-link">TikTok</a>
            <a href="#" className="gallery-page__social-link">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
