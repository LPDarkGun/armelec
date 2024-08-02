import React, { useState } from "react"
import { motion } from "framer-motion"
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
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function CalculatorComponent() {
  const { t } = useTranslation()

  const [items, setItems] = useState([
    {
      description: "item_silencer",
      unit: "unit_piece",
      quantity: 0,
      price: 1500,
      enabled: false,
    },
    {
      description: "item_lightbox",
      unit: "unit_piece",
      quantity: 0,
      price: 8000,
      enabled: false,
    },
    {
      description: "item_pipe",
      unit: "unit_piece",
      quantity: 0,
      price: 2000,
      enabled: false,
    },
    {
      description: "item_electric_boiler",
      unit: "unit_piece",
      quantity: 0,
      price: 25000,
      enabled: false,
    },
    {
      description: "item_led_lightbox",
      unit: "unit_piece",
      quantity: 0,
      price: 10000,
      enabled: false,
    },
    {
      description: "item_short_circuit",
      unit: "unit_piece",
      quantity: 0,
      price: 3000,
      enabled: false,
    },
    {
      description: "item_electric_casing",
      unit: "unit_piece",
      quantity: 0,
      price: 3500,
      enabled: false,
    },
    {
      description: "item_conditioner",
      unit: "unit_piece",
      quantity: 0,
      price: 45000,
      enabled: false,
    },
    {
      description: "item_cable",
      unit: "unit_piece",
      quantity: 0,
      price: 600,
      enabled: false,
    },
    {
      description: "item_drink_requirer",
      unit: "unit_piece",
      quantity: 0,
      price: 4000,
      enabled: false,
    },
  ])

  const [grandTotal, setGrandTotal] = useState(0)

  const handleInputChange = (index, field, value) => {
    const newItems = [...items]
    newItems[index][field] = value === "" ? 0 : parseFloat(value)
    setItems(newItems)
  }

  const toggleItem = (index) => {
    const newItems = [...items]
    newItems[index].enabled = !newItems[index].enabled
    newItems[index].quantity = newItems[index].enabled ? 1 : 0
    setItems(newItems)
  }

  const calculateGrandTotal = () => {
    const total = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    setGrandTotal(total)
  }

  return (
    <motion.section
      id="calculator"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-600"
          variants={fadeIn}
        >
          {t("calculator_title")}
        </motion.h2>
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-blue-600 border-2">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-2xl md:text-3xl font-bold text-center">
              {t("calculate_costs")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base md:text-lg">
                      {t("description")}
                    </TableHead>
                    <TableHead className="text-base md:text-lg">
                      {t("unit")}
                    </TableHead>
                    <TableHead className="text-base md:text-lg">
                      {t("quantity")}
                    </TableHead>
                    {/* <TableHead className="text-base md:text-lg">
                      {t("total_price")}
                    </TableHead>
                    <TableHead className="text-base md:text-lg">
                      {t("enable")}
                    </TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{t(item.description)}</TableCell>
                      <TableCell>{t(item.unit)}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "quantity",
                              parseFloat(e.target.value)
                            )
                          }
                          disabled={!item.enabled}
                          className="border-blue-600 w-20 md:w-24"
                        />
                      </TableCell>
                      {/* <TableCell>
                        {(item.quantity * item.price).toLocaleString()} դրամ
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={item.enabled}
                          onCheckedChange={() => toggleItem(index)}
                        />
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-xl md:text-2xl font-bold mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("total")}: {grandTotal.toLocaleString()} դրամ
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={calculateGrandTotal}
                className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 mt-4 md:mt-0"
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

// {
//   description: "Ավտոմատ անջատիչ",
//   unit: "հատ",
//   quantity: 0,
//   price: 2000,
//   enabled: false,
// },
// {
//   description: "Վարդակ",
//   unit: "հատ",
//   quantity: 0,
//   price: 5000,
//   enabled: false,
// },
// {
//   description: "Վարդակ հողանցումով",
//   unit: "հատ",
//   quantity: 0,
//   price: 5000,
//   enabled: false,
// },
// {
//   description: "Անջատիչ 1 տեղ",
//   unit: "հատ",
//   quantity: 0,
//   price: 5000,
//   enabled: false,
// },
// {
//   description: "Անջատիչ 2 տեղ",
//   unit: "հատ",
//   quantity: 0,
//   price: 5000,
//   enabled: false,
// },
