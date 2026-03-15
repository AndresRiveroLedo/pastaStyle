import { useRef, useState } from 'react'
import './PastaCollection.css'

const dishes = [
  { id: 'a1', name: 'CAESAR SALAD',             desc: 'Local romaine hearts, shaved parmesan, croutons',         price: '$12.95', category: 'ANTIPASTI',    img: '/dish_caesar_salad.png' },
  { id: 'a2', name: 'CAPONATA & MOZZARELLA',    desc: 'Eggplant, fresh mozzarella, parmesan, tomato',            price: '$14.95', category: 'ANTIPASTI',    img: '/dish_caponata_mozzarella.png' },
  { id: 'a3', name: 'ITALIAN MEATBALLS',        desc: 'Smoked tomato emulsion, parmesan',                        price: '$14.95', category: 'ANTIPASTI',    img: '/dish_meatballs.png' },
  { id: 'p1', name: 'SPAGHETTI POMODORO',       desc: 'Smoked tomato sauce, parmesan',                           price: '$9.95',  category: 'PASTA FRESCA', img: '/dish_spaghetti_pomodoro.png' },
  { id: 'p2', name: 'CHICKEN FETTUCCINE',       desc: 'Parmesan cream sauce, chicken',                           price: '$16.95', category: 'PASTA FRESCA', img: '/dish_fettuccine_alfredo.png' },
  { id: 'p3', name: 'RADIATORI BOLOGNESE',      desc: 'Pomodoro, pork, beef, parmesan',                          price: '$16.95', category: 'PASTA FRESCA', img: '/dish_bolognese.png' },
  { id: 'p4', name: 'GNOCCHI PESTO',            desc: 'Basil sauce, garlic, parmesan',                           price: '$16.95', category: 'PASTA FRESCA', img: '/dish_gnocchi_pesto.png' },
  { id: 'p5', name: 'MEAT LASAGNA',             desc: 'Beef, pork, ricotta, mozzarella, signature dough',        price: '$18.95', category: 'PASTA FRESCA', img: '/dish_lasagna.png' },
  { id: 'p6', name: 'GNOCCHI SORRENTINA',       desc: 'Tomatoes sauce, fresh mozzarella, basil',                 price: '$16.95', category: 'PASTA FRESCA', img: '/dish_gnocchi_sorrentina.png' },
  { id: 'p7', name: 'FETTUCCINE MEATBALLS',     desc: 'Smoked tomato sauce, parmesan',                           price: '$16.95', category: 'PASTA FRESCA', img: '/dish_meatballs.png' },
  { id: 'p8', name: 'TAGLIATELLE MONTANARA',    desc: 'Sausages, mushrooms, parmesan cream',                     price: '$16.95', category: 'PASTA FRESCA', img: '/dish_tagliatelle_montanara.png' },
  { id: 'p9', name: 'RADIATORI AMATRICIANA',    desc: 'Smoked tomato, parmesan, guanciale, peperoncino',         price: '$16.95', category: 'PASTA FRESCA', img: '/dish_amatriciana.png' },
  { id: 'c1', name: 'CHICKEN LEMON & CAPERS',  desc: 'Lemon butter sauce, broccolini, baby potatoes, mushrooms', price: '$19.95', category: 'CARNE',        img: '/menu_carne.png' },
]

export default function PastaCollection() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const scrollTo = (idx) => {
    setActive(idx)
    const card = trackRef.current?.children[idx]
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  // Drag-to-scroll
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current)
  }
  const onMouseUp = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  return (
    <section className="pasta-collection" id="pasta-collection">
      <div className="pasta-collection__header">
        <h2 className="pasta-collection__title">PASTA<br/>COLLECTION</h2>
        <p className="pasta-collection__count">{dishes.length} PLATOS</p>
      </div>

      {/* Horizontal carousel */}
      <div
        className="pasta-collection__track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {dishes.map((dish, idx) => (
          <div
            key={dish.id}
            className={`pasta-collection__card ${active === idx ? 'pasta-collection__card--active' : ''}`}
            onClick={() => setActive(idx)}
          >
            <div className="pasta-collection__img-wrap">
              <img src={dish.img} alt={dish.name} className="pasta-collection__img" loading="lazy" />
            </div>
            <div className="pasta-collection__info">
              <span className="pasta-collection__category">{dish.category}</span>
              <h3 className="pasta-collection__name">{dish.name}</h3>
              <p className="pasta-collection__desc">{dish.desc}</p>
              <span className="pasta-collection__price">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="pasta-collection__dots">
        {dishes.map((_, idx) => (
          <button
            key={idx}
            className={`pasta-collection__dot ${active === idx ? 'pasta-collection__dot--active' : ''}`}
            onClick={() => scrollTo(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
