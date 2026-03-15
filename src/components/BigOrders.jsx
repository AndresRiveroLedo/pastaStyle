import './BigOrders.css'

export default function BigOrders() {
  return (
    <section className="big-orders" id="big-orders">
      <div className="big-orders__content">
        <div className="big-orders__text">
          <h2 className="big-orders__eyebrow">BIG ORDERS</h2>
          <p className="big-orders__question">NEED TO PLACE A<br/>BIG ORDER?</p>
          <p className="big-orders__sub">For groups, events, offices… we've got you covered. Pasta for everyone.</p>
          <a href="#" className="big-orders__cta" id="big-orders-cta">
            GET IN TOUCH
          </a>
        </div>
        <div className="big-orders__badge" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="big-orders__badge-svg">
            <defs>
              <path id="circle-text" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>
            <circle cx="100" cy="100" r="90" fill="var(--red)" />
            <text className="big-orders__badge-inner" textAnchor="middle" fill="white" fontSize="16" fontFamily="Bebas Neue" letterSpacing="3">
              <textPath href="#circle-text" startOffset="50%">
                BIG ORDERS · LARGE ORDERS · PASTA STYLE ·
              </textPath>
            </text>
            <text x="100" y="92" textAnchor="middle" fill="white" fontSize="28" fontFamily="Bebas Neue" letterSpacing="2">BIG</text>
            <text x="100" y="120" textAnchor="middle" fill="white" fontSize="28" fontFamily="Bebas Neue" letterSpacing="2">ORDERS</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
