import './PastaCities.css'

const cities = [
  { name: 'ROME', img: '/carbonara.png', tag: 'CLASSIC', desc: 'The eternal city. The original carbonara, no cream.' },
  { name: 'NAPLES', img: '/amatriciana.png', tag: 'TRADITIONAL', desc: 'The soul of the south. Tomato, guanciale, fire.' },
  { name: 'MILAN', img: '/cacio_pepe.png', tag: 'MINIMALIST', desc: 'Elegance and precision. Pecorino, pepper, nothing more.' },
]

export default function PastaCities() {
  return (
    <section className="pasta-cities" id="pasta-cities">
      <div className="pasta-cities__header">
        <h2 className="pasta-cities__title">PASTA STYLE</h2>
        <p className="pasta-cities__sub">HERE'S OUR MENU</p>
      </div>
      <div className="pasta-cities__grid">
        {cities.map((city) => (
          <article className="city-card" key={city.name}>
            <div className="city-card__img-wrap">
              <img src={city.img} alt={city.name} className="city-card__img" />
              <span className="city-card__tag">{city.tag}</span>
            </div>
            <div className="city-card__body">
              <h3 className="city-card__name">{city.name}</h3>
              <p className="city-card__desc">{city.desc}</p>
              <button className="city-card__btn" id={`city-btn-${city.name.toLowerCase()}`}>
                VIEW MENU →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
