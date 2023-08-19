import './App.css'
import './assets/agrandir-bold.ttf';
import HeroSection from './components/heroSection';
import FloatingAssets from './components/floatingAssets';
import NavBar from './components/navBar';


function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
      <FloatingAssets />
    </div>
  )
}

export default App
