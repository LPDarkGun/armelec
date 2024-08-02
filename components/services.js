import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ServicesComponent() {
  const { t } = useTranslation()
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      className="py-16 md:py-24 bg-white h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-600"
          variants={fadeIn}
        >
          {t("services_title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: t("installation"),
              description: t("installation_description"),
              icon: "⚡",
            },
            {
              title: t("maintenance"),
              description: t("maintenance_description"),
              icon: "🔧",
            },
            {
              title: t("consultation"),
              description: t("consultation_description"),
              icon: "💡",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-2xl transition duration-300 border-blue-600 border-2">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-xl md:text-2xl flex items-center">
                    <span className="text-3xl md:text-4xl mr-4">
                      {service.icon}
                    </span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
