import { useState, useEffect } from 'react'
import './Hero.css'

const stickers = [
  { text: 'Pasta Club', top: '12%', left: '2%', rotate: '-6deg', scale: 1, type: 'red-badge', id: 's1' },
  { text: '[PS]', top: '8%', right: '3%', rotate: '4deg', scale: 0.85, type: 'silver', id: 's2' },
  { text: '#PASTASTYLE', top: '22%', right: '2%', rotate: '-3deg', scale: 0.9, type: 'outline', id: 's3' },
  { text: '✦', top: '50%', left: '2%', rotate: '0deg', scale: 1.2, type: 'spark', id: 's4' },
  { text: '☺', top: '72%', right: '3%', rotate: '12deg', scale: 1, type: 'smiley', id: 's5' },
  { text: 'PASTA\nSTYLE', top: '42%', right: '2%', rotate: '-6deg', scale: 0.9, type: 'red-logo', id: 's6' },
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const parallax = scrollY * 0.15

  return (
    <section className="hero" id="hero">
      {/* Massive Background Text */}
      <div className="hero__bg-text" style={{ transform: `translateY(${parallax}px)` }}>
        <span className="hero__big-line hero__big-line--top">PASTA DELIVERY</span>
        <span className="hero__big-line hero__big-line--bottom">STREET FUEL</span>
      </div>

      {/* Full-bleed background video */}
      <video
        className="hero__bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/pasta_style_header.mp4" type="video/mp4" />
        <source src="/pasta_style_header.MOV" type="video/quicktime" />
      </video>

      {/* Sticker badges */}
      {stickers.map(s => (
        <div
          key={s.id}
          className={`sticker sticker--${s.type}`}
          style={{
            top: s.top,
            left: s.left ?? 'auto',
            right: s.right ?? 'auto',
            transform: `rotate(${s.rotate}) scale(${s.scale})`,
          }}
        >
          {s.text}
        </div>
      ))}

      {/* Social handle */}
      <div className="hero__social">
        <span className="hero__social-handle">#GANASDEPASTA</span>
        <span className="hero__social-label">AUTHENTIC ITALIAN CUISINE</span>
      </div>


    </section>
  )
}
