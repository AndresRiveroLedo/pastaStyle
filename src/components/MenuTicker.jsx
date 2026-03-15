import './MenuTicker.css'

const items = [
  'CAESAR SALAD', 'CAPONATA & MOZZARELLA', 'ITALIAN MEATBALLS',
  'SPAGHETTI POMODORO', 'CHICKEN FETTUCCINE ALFREDO', 'RADIATORI BOLOGNESE',
  'GNOCCHI PESTO', 'MEAT LASAGNA', 'GNOCCHI SORRENTINA',
  'FETTUCCINE MEATBALLS', 'TAGLIATELLE MONTANARA', 'RADIATORI AMATRICIANA',
  'CHICKEN LEMON & CAPERS',
]

const ticker = [...items, ...items].join('  ·  ')

export default function MenuTicker() {
  return (
    <div className="menu-ticker" id="ticker">
      <div className="menu-ticker__track">
        <span className="menu-ticker__text">{ticker}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span className="menu-ticker__text" aria-hidden="true">{ticker}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}
