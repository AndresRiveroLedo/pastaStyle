import './Gallery.css'

const galleryImages = [
  { id: 1, src: '/dish_caesar_salad.png', alt: 'Caesar Salad' },
  { id: 2, src: '/dish_caponata_mozzarella.png', alt: 'Caponata & Mozzarella' },
  { id: 3, src: '/dish_meatballs.png', alt: 'Italian Meatballs' },
  { id: 4, src: '/dish_spaghetti_pomodoro.png', alt: 'Spaghetti Pomodoro' },
  { id: 5, src: '/dish_fettuccine_alfredo.png', alt: 'Chicken Fettuccine Alfredo' },
  { id: 6, src: '/dish_bolognese.png', alt: 'Radiatori Bolognese' },
  { id: 7, src: '/dish_gnocchi_pesto.png', alt: 'Gnocchi Pesto' },
  { id: 8, src: '/dish_lasagna.png', alt: 'Meat Lasagna' },
  { id: 9, src: '/dish_gnocchi_sorrentina.png', alt: 'Gnocchi Sorrentina' },
  { id: 10, src: '/dish_tagliatelle_montanara.png', alt: 'Tagliatelle Montanara' },
  { id: 11, src: '/dish_amatriciana.png', alt: 'Radiatori Amatriciana' },
  { id: 12, src: '/menu_carne.png', alt: 'Chicken Lemon & Capers' },
  { id: 13, src: '/1861AAB6-3F7C-4696-B07A-56F2B1A18217.jpeg', alt: 'Imagen iPhone 1' },
  { id: 14, src: '/F9FE2633-22EE-4FA3-A4EA-34AC962B6CCA.jpeg', alt: 'Imagen iPhone 2' },
  { id: 15, src: '/CA4BF388-5789-4BB0-8729-FCCECEBFA8F2.jpeg', alt: 'Imagen iPhone 3' },
  { id: 16, src: '/CA4BF388-5789-4BB0-8729-FCCECEBFA8F2 2.jpeg', alt: 'Imagen iPhone 4' },
  { id: 17, src: '/BEC9B6EE-580D-41C6-A85D-87587A0F478D.jpeg', alt: 'Imagen iPhone 5' },
  { id: 18, src: '/3391D958-D026-4800-82E0-B6A878CF29BB.jpeg', alt: 'Imagen iPhone 6' },
  { id: 19, src: '/19877D71-7FA8-4BE3-BEA8-6863582D9948.jpeg', alt: 'Imagen iPhone 7' },
  { id: 20, src: '/F61BC01F-161E-482D-A382-0EFE443C6114.jpeg', alt: 'Imagen iPhone 8' },
  { id: 21, src: '/D7357DAD-2999-4E31-A338-0CDACC8B7AFD.jpeg', alt: 'Imagen Nueva 1' },
  { id: 22, src: '/0632E0B3-2426-4548-8983-7E610197F6B8.jpeg', alt: 'Imagen Nueva 2' },
  { id: 23, src: '/68572761-199E-40EF-9870-50356BEC1AE0.jpeg', alt: 'Imagen Nueva 3' },
  { id: 24, src: '/58F1E806-4A19-4E74-BD1D-E5B4690551F0.jpeg', alt: 'Imagen Nueva 4' },
  { id: 25, src: '/04D0F2BF-C44D-4809-9D40-81CF8387E366.jpeg', alt: 'Imagen Nueva 5' },
  { id: 26, src: '/4229935B-B396-4B68-A648-A59EC518BEC9.jpeg', alt: 'Imagen Nueva 6' },
  { id: 27, src: '/DD08304F-13B6-4ED5-BAB1-9828F0364B07.jpeg', alt: 'Imagen Nueva 7' },
  { id: 28, src: '/FE896465-F08B-4012-8134-7A7000E35273.jpeg', alt: 'Imagen Nueva 8' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery__title">GALLERY</h2>
      <div className="gallery__grid">
        {galleryImages.map((img, index) => (
          <div key={img.id} className="gallery__item" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={img.src} alt={img.alt} className="gallery__img" />
          </div>
        ))}
      </div>
    </section>
  )
}
