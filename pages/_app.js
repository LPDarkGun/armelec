import "@/styles/globals.css"
import "../i18n"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
