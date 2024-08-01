import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { useTranslation } from "react-i18next"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Menu } from "lucide-react"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Calculator from "@/components/Calculator"
import Header from "@/components/Header"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value)
  }
  const [items, setItems] = useState([
    {
      description: "Ավտոմատ անջատիչ",
      unit: "հատ",
      quantity: 0,
      price: 2000,
      enabled: false,
    },
    {
      description: "Վարդակ",
      unit: "հատ",
      quantity: 0,
      price: 5000,
      enabled: false,
    },
    {
      description: "Վարդակ հողանցումով",
      unit: "հատ",
      quantity: 0,
      price: 5000,
      enabled: false,
    },
    {
      description: "Անջատիչ 1 տեղ",
      unit: "հատ",
      quantity: 0,
      price: 5000,
      enabled: false,
    },
    {
      description: "Անջատիչ 2 տեղ",
      unit: "հատ",
      quantity: 0,
      price: 5000,
      enabled: false,
    },
  ])

  const menuItems = [
    { id: "home", label: t("home") },
    { id: "services", label: t("services") },
    { id: "projects", label: t("projects") },
    { id: "calculator", label: t("calculator") },
    { id: "contact", label: t("contact") },
  ]

  const [grandTotal, setGrandTotal] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const handleInputChange = (index, field, value) => {
    const newItems = [...items]
    newItems[index][field] = value
    setItems(newItems)
  }

  const toggleItem = (index) => {
    const newItems = [...items]
    newItems[index].enabled = !newItems[index].enabled
    newItems[index].quantity = newItems[index].enabled ? 1 : 0
    setItems(newItems)
  }

  const calculateGrandTotal = () => {
    const total = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    setGrandTotal(total)
  }

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
