import React from "react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t, i18n } = useTranslation()
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">{t("header_title")}</h3>
            <p className="mt-2">{t("footer_title")}</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ARM Electro. {t("rights_reserved")}</p>
        </div>
      </div>
    </footer>
  )
}
