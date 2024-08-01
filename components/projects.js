import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  const { t } = useTranslation()
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 md:py-24 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-600"
          variants={fadeIn}
        >
          {t("projects_title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: t("project1_title"),
              description: t("project1_description"),
              image: "/project1.jpg",
            },
            {
              title: t("project2_title"),
              description: t("project2_description"),
              image: "/project2.jpg",
            },
            {
              title: t("project3_title"),
              description: t("project3_description"),
              image: "/project3.jpg",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
