import { useState, useEffect, useRef, useCallback } from 'react'
import './Menu.css'

const categories = [
  {
    id: 'antipasti',
    label: 'ANTIPASTI',
    img: '/menu_antipasti.png',
    dishes: [
      {
        id: 'a1',
        name: 'CAESAR SALAD',
        desc: 'Local romaine hearts, shaved parmesan, homemade dressing, croutons.',
        note: 'Add chicken $4.50 · shrimp $5.50',
        price: '12.95',
        tag: null,
        img: '/dish_caesar_salad.png',
      },
      {
        id: 'a2',
        name: 'CAPONATA & MOZZARELLA',
        desc: 'Eggplant, fresh mozzarella, parmesan, cheese, tomato.',
        note: 'Add chicken $4.50 · shrimp $5.50',
        price: '14.95',
        img: '/dish_caponata_mozzarella.png',
      },
      {
        id: 'a3',
        name: 'ITALIAN MEATBALLS',
        desc: 'Smoked tomato emulsion, parmesan.',
        note: null,
        price: '14.95',
        tag: null,
        img: '/dish_meatballs.png',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'PASTA FRESCA',
    img: '/menu_pasta_fresca.png',
    dishes: [
      { id: 'p1', name: 'SPAGHETTI POMODORO',        desc: 'Smoked tomato sauce, parmesan.',                                                                    note: null, price: '9.95',  tag: 'BEST VALUE', img: '/dish_spaghetti_pomodoro.png' },
      { id: 'p2', name: 'CHICKEN FETTUCCINE ALFREDO', desc: 'Parmesan cream sauce, chicken.',                                                                    note: null, price: '16.95', tag: "CHEF'S CHOICE", img: '/dish_fettuccine_alfredo.png' },
      { id: 'p3', name: 'RADIATORI BOLOGNESE',        desc: 'Pomodoro, pork, beef, parmesan.',                                                                   note: null, price: '16.95', tag: null, img: '/dish_bolognese.png' },
      { id: 'p4', name: 'GNOCCHI PESTO',              desc: 'Basil sauce, garlic, parmesan.',                                                                    note: null, price: '16.95', tag: null, img: '/dish_gnocchi_pesto.png' },
      { id: 'p5', name: 'MEAT LASAGNA',               desc: 'Beef, pork, tomato sauce, creamy ricotta, melting mozzarella and signature dough.',                 note: null, price: '18.95', tag: 'BEST SELLER', img: '/dish_lasagna.png' },
      { id: 'p6', name: 'GNOCCHI SORRENTINA',         desc: 'Tomatoes sauce, fresh mozzarella, basil.',                                                          note: null, price: '16.95', tag: null, img: '/dish_gnocchi_sorrentina.png' },
      { id: 'p7', name: 'FETTUCCINE MEATBALLS',       desc: 'Smoked tomato sauce, parmesan.',                                                                    note: null, price: '16.95', tag: null, img: '/dish_meatballs.png' },
      { id: 'p8', name: 'TAGLIATELLE MONTANARA',      desc: 'Sausages, mushrooms, parmesan cream.',                                                              note: null, price: '16.95', tag: null, img: '/dish_tagliatelle_montanara.png' },
      { id: 'p9', name: 'RADIATORI AMATRICIANA',      desc: 'Smoked tomato sauce, parmesan, guanciale, peperoncino (spicy).',                                    note: null, price: '16.95', tag: '🌶 SPICY', img: '/dish_amatriciana.png' },
    ],
    note: 'Add chicken $4.50 · shrimp $5.50',
  },
  {
    id: 'carne',
    label: 'CARNE',
    img: '/menu_carne.png',
    dishes: [
      {
        id: 'c1',
        name: 'CHICKEN LEMON & CAPERS',
        desc: 'Pan-seared chicken breast with lemon butter sauce and capers.',
        note: 'One side: Broccolini · Baby Potatoes · Mushrooms',
        price: '19.95',
        tag: "CHEF'S CHOICE",
        img: '/menu_carne.png',
      },
    ],
  },
]

export default function Menu() {
  const [activeCat, setActiveCat] = useState('antipasti')
  const [activeDish, setActiveDish] = useState('a1')
  const pausedRef = useRef(false)
  const resumeTimer = useRef(null)

  const cat = categories.find(c => c.id === activeCat)
  const dish = cat?.dishes.find(d => d.id === activeDish) ?? cat?.dishes[0]

  const switchCat = (id) => {
    setActiveCat(id)
    setActiveDish(categories.find(c => c.id === id).dishes[0].id)
  }

  // Auto-advance every 3 s (pauses on user interaction for 6 s)
  const advance = useCallback(() => {
    if (pausedRef.current) return
    setActiveDish(prev => {
      const currentCat = categories.find(c => c.dishes.some(d => d.id === prev))
      if (!currentCat) return prev
      const idx = currentCat.dishes.findIndex(d => d.id === prev)
      
      // If it's the last dish in the current category, move to next category
      if (idx === currentCat.dishes.length - 1) {
        const currentCatIdx = categories.findIndex(c => c.id === currentCat.id)
        const nextCatIdx = (currentCatIdx + 1) % categories.length
        const nextCat = categories[nextCatIdx]
        setActiveCat(nextCat.id)
        return nextCat.dishes[0].id
      }
      
      // Otherwise, advance to next dish in same category
      const next = currentCat.dishes[idx + 1]
      return next.id
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(advance, 3000)
    return () => clearInterval(timer)
  }, [advance])

  const handleUserInteraction = (dishId) => {
    pausedRef.current = true
    setActiveDish(dishId)
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { pausedRef.current = false }, 6000)
  }

  return (
    <section className="menu" id="menu">
      <div className="menu__header">
        <h2 className="menu__title">OUR MENU</h2>
        {/* Category tabs — desktop only */}
        <div className="menu__cats">
          {categories.map(c => (
            <button
              key={c.id}
              id={`cat-${c.id}`}
              className={`menu__cat ${activeCat === c.id ? 'menu__cat--active' : ''}`}
              onClick={() => { handleUserInteraction(categories.find(x => x.id === c.id).dishes[0].id); switchCat(c.id) }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: tabs + detail ── */}
      <div className="menu__layout menu__layout--desktop">
        <div className="menu__list">
          {cat?.dishes.map(d => (
            <button
              key={d.id}
              id={`menu-item-${d.id}`}
              className={`menu__item ${activeDish === d.id ? 'menu__item--active' : ''}`}
              onClick={() => handleUserInteraction(d.id)}
            >
              <span className="menu__item-body">
                <span className="menu__item-name">{d.name}</span>
                <span className="menu__item-desc">{d.desc}</span>
              </span>
              <span className="menu__item-meta">
                {d.tag && <span className="menu__item-tag">{d.tag}</span>}
                <span className="menu__item-price">${d.price}</span>
              </span>
            </button>
          ))}
          {cat?.note && <p className="menu__list-note">{cat.note}</p>}
        </div>
        {dish && (
          <div className="menu__detail">
            <div className="menu__detail-img-wrap">
              <img src={dish.img} alt={dish.name} className="menu__detail-img" />
            </div>
            <div className="menu__detail-info">
              <div className="menu__detail-sub">{cat.label}</div>
              <div className="menu__dish-selector">
                <select 
                  value={activeDish} 
                  onChange={(e) => {
                    handleUserInteraction(e.target.value)
                    document.querySelector('.menu__detail')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="menu__dish-select"
                >
                  {cat.dishes.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
              <h3 className="menu__detail-name">{dish.name}</h3>
              <p className="menu__detail-desc">{dish.desc}</p>
              {dish.note && <p className="menu__detail-note">{dish.note}</p>}
              <div className="menu__detail-footer">
                <span className="menu__detail-price">${dish.price}</span>
                <a href="https://order.toasttab.com/online/pasta-style-restaurant-ghost-kitchen-6941-southwest-196th-avenue-suite-5" target="_blank" rel="noopener noreferrer" className="menu__detail-cta" id={`order-btn-${dish.id}`}>ORDER NOW 🔥</a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE: all categories stacked ── */}
      <div className="menu__mobile-all">
        {categories.map(c => {
          const [mobileActiveDish, setMobileActiveDish] = useState(c.dishes[0].id)
          const mobileDish = c.dishes.find(d => d.id === mobileActiveDish) || c.dishes[0]
          const pausedRef = useRef(false)
          const resumeTimer = useRef(null)

          useEffect(() => {
            const advance = () => {
              if (pausedRef.current) return
              setMobileActiveDish(prev => {
                const idx = c.dishes.findIndex(d => d.id === prev)
                const next = c.dishes[(idx + 1) % c.dishes.length]
                return next.id
              })
            }
            const timer = setInterval(advance, 3000)
            return () => clearInterval(timer)
          }, [c.dishes])

          const handleMobileInteraction = (dishId) => {
            pausedRef.current = true
            setMobileActiveDish(dishId)
            clearTimeout(resumeTimer.current)
            resumeTimer.current = setTimeout(() => { pausedRef.current = false }, 6000)
          }
          
          return (
            <div key={c.id} className="menu__mobile-cat">
              {/* Category header */}
              <div className="menu__mobile-cat-label">{c.label}</div>
              
              {/* Selected dish image - changes on click */}
              <div className="menu__detail-img-wrap">
                <img src={mobileDish.img} alt={mobileDish.name} className="menu__detail-img" />
              </div>
              
              {/* Full dish list - click to change image */}
              <div className="menu__list">
                {c.dishes.map(d => (
                  <button 
                    key={d.id} 
                    className={`menu__item ${mobileActiveDish === d.id ? 'menu__item--active' : ''}`}
                    onClick={() => handleMobileInteraction(d.id)}
                  >
                    <span className="menu__item-body">
                      <span className="menu__item-name">{d.name}</span>
                      <span className="menu__item-desc">{d.desc}</span>
                    </span>
                    <span className="menu__item-meta">
                      {d.tag && <span className="menu__item-tag">{d.tag}</span>}
                      <span className="menu__item-price">${d.price}</span>
                    </span>
                  </button>
                ))}
                {c.note && <p className="menu__list-note">{c.note}</p>}
              </div>
              
              {/* ORDER NOW button for mobile */}
              <div className="menu__mobile-cta-wrap">
                <a href="https://order.toasttab.com/online/pasta-style-restaurant-ghost-kitchen-6941-southwest-196th-avenue-suite-5" target="_blank" rel="noopener noreferrer" className="menu__detail-cta">ORDER NOW 🔥</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

