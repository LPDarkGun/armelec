import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-['Noto Sans Armenian']">
      <Hero />
      <Services />
      <Projects />
      <Calculator />
      <Contact />
    </div>
  )
}
