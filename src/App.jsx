import { Routes, Route } from 'react-router-dom'
import './App.css'

import TopBar from './components/TopBar'
import Hero from './components/Hero'
import MenuTicker from './components/MenuTicker'
import PastaCities from './components/PastaCities'
import PastaCollection from './components/PastaCollection'
import Menu from './components/Menu'
import BigOrders from './components/BigOrders'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'

function HomePage() {
  return (
    <>
      <TopBar />
      <Hero />
      <MenuTicker />
      <Menu />
      <PastaCollection />
      <div style={{ display: 'none' }}>
        <PastaCities />
      </div>
      <BigOrders />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  )
}

export default App
