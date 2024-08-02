import CalculatorComponent from "@/components/Calculator"
import ContactComponent from "@/components/Contact"
import HeroComponent from "@/components/Hero"
import ProjectsComponent from "@/components/Projects"
import ServicesComponent from "@/components/Services"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-['Noto Sans Armenian']">
      <HeroComponent />
      <ServicesComponent />
      <ProjectsComponent />
      <CalculatorComponent />
      <ContactComponent />
    </div>
  )
}
