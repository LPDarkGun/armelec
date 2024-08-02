"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function HeaderComponent() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value)
  }

  const menuItems = [{ id: "calculator", label: t("calculator") }]

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground p-4 md:p-6 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Header Title */}
        <motion.h1
          className="text-2xl md:text-3xl font-semibold select-none cursor-default"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("header_title")}
        </motion.h1>

        <div className="flex items-center space-x-4">
          {/* Navigation Menu for Larger Screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-base font-normal hover:text-primary transition duration-300"
            >
              {t("home")}
            </Link>
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={`/#${item.id}`}
                className="text-base font-normal hover:text-primary transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Link
              href="/services"
              className="text-base font-normal hover:text-primary transition duration-300"
            >
              {t("services")}
            </Link>
            <Link
              href="/projects"
              className="text-base font-normal hover:text-primary transition duration-300"
            >
              {t("projects")}
            </Link>
          </div>
          <Select
            onValueChange={handleLanguageChange}
            defaultValue={i18n.language}
          >
            <SelectTrigger className="w-32 bg-primary text-primary-foreground border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hy">Հայերեն</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-2xl font-normal hover:text-primary transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
