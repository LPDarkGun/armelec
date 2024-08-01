import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export default function Hero() {
  const { t } = useTranslation()
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gradient-to-br from-gray-100 to-gray-300 text-black py-16 md:py-32"
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          animate={floatAnimation}
        >
          {t("hero_title")}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("hero_description")}
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4"
          >
            {t("discover_expertise")}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
