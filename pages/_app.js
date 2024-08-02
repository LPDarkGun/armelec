import "@/styles/globals.css"
import "../i18n"
import HeaderComponent from "@/components/Header"
import FooterComponent from "@/components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  )
}
