import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import NavBar from "./components/Nav"

export default function App() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  )
}
