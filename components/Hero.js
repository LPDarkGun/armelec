import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function HeroComponent() {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative bg-gradient-to-br from-gray-100 to-gray-300 text-black py-16 md:py-32 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://taraenergy.com/wp-content/uploads/2022/11/history-of-electricity-article-image-of-electric-powerlines.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <div className="container mx-auto text-center px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-purple-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("hero_title")}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("hero_description")}
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("discover_expertise")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("learn_more")}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
