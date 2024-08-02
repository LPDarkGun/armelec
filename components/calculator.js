import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const totalAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { type: "spring", stiffness: 300, damping: 25 },
}

export default function CalculatorComponent() {
  const { t } = useTranslation()

  const [items, setItems] = useState([
    {
      description: "item_socket",
      unit: "unit_piece",
      quantity: "0",
      price: 5000,
      enabled: false,
    },
    {
      description: "item_socket_with_earthing",
      unit: "unit_piece",
      quantity: "0",
      price: 5000,
      enabled: false,
    },
    {
      description: "item_switch_1_place",
      unit: "unit_piece",
      quantity: "0",
      price: 5000,
      enabled: false,
    },
    {
      description: "item_switch_2_places",
      unit: "unit_piece",
      quantity: "0",
      price: 5000,
      enabled: false,
    },
  ])

  const [grandTotal, setGrandTotal] = useState(0)

  const handleInputChange = (index, field, value) => {
    const newItems = [...items]
    if (value === "") {
      newItems[index][field] = "0"
    } else {
      newItems[index][field] = value.replace(/^0+(?=\d)/, "")
    }
    setItems(newItems)
  }

  const calculateGrandTotal = () => {
    const total = items.reduce((acc, item) => {
      const quantity =
        item.quantity.trim() === "" ? 0 : parseFloat(item.quantity)
      return acc + quantity * item.price
    }, 0)
    setGrandTotal(total)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        calculateGrandTotal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [items])

  return (
    <motion.section
      id="calculator"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-700"
          variants={fadeIn}
        >
          {t("calculator_title")}
        </motion.h2>
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-blue-500 border-2 overflow-hidden bg-white bg-opacity-90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-2xl md:text-3xl font-bold text-center">
              {t("calculate_costs")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base md:text-lg font-semibold text-blue-700">
                      {t("description")}
                    </TableHead>
                    <TableHead className="text-base md:text-lg font-semibold text-blue-700">
                      {t("unit")}
                    </TableHead>
                    <TableHead className="text-base md:text-lg font-semibold text-blue-700">
                      {t("quantity")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-blue-50 transition-colors duration-200"
                    >
                      <TableCell className="font-medium text-blue-600">
                        {t(item.description)}
                      </TableCell>
                      <TableCell className="text-indigo-600">
                        {t(item.unit)}
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleInputChange(index, "quantity", e.target.value)
                          }
                          className="border-blue-400 w-20 md:w-24 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-100 to-indigo-100 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={grandTotal}
                className="text-2xl md:text-3xl font-bold mt-4 md:mt-0 text-blue-700"
                {...totalAnimation}
              >
                {t("total")}: {grandTotal.toLocaleString()} {t("money_dram")}
              </motion.div>
            </AnimatePresence>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0"
            >
              <Button
                onClick={calculateGrandTotal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition duration-300 px-6 py-3 rounded-full shadow-lg text-lg"
              >
                {t("calculate_total")}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  )
}
