import React, { useEffect } from "react"
import i18n from "../i18n"
import HeaderComponent from "@/components/Header"
import FooterComponent from "@/components/Footer"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    i18n.changeLanguage(detectLanguage())
  }, [])

  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  )
}

const detectLanguage = () => {
  if (typeof window !== "undefined") {
    const userLanguage = navigator.language || navigator.userLanguage
    if (userLanguage.includes("hy")) {
      return "hy"
    } else if (userLanguage.includes("es")) {
      return "es"
    }
  }
  return "en"
}
