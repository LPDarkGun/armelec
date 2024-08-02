// i18n.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      header_title: "ARM Electro",
      home: "Home",
      services: "Services",
      projects: "Projects",
      calculator: "Calculator",
      contact: "Contact",
      hero_title: "Electrifying Your Construction Dreams",
      hero_description:
        "ARM Electro, your primary partner for modern electrical solutions in construction. Illuminating projects with expertise and innovation.",
      discover_expertise: "Discover Our Expertise",
      services_title: "Our Comprehensive Services",
      installation: "Electrical Installation",
      installation_description:
        "Modern cabling and installation for all types of buildings. Ensuring safety and efficiency in every connection.",
      maintenance: "Maintenance & Repair",
      maintenance_description:
        "Preventive maintenance and rapid repairs to keep your systems at peak efficiency. Minimizing downtime, maximizing productivity.",
      consultation: "Expert Consultation",
      consultation_description:
        "Leverage our decades of experience for unparalleled advice on electrical planning, energy efficiency, and cost-effective strategies.",
      projects_title: "Our Notable Projects",
      project1_title: "Residential Complex Wiring",
      project1_description:
        "Comprehensive electrical installation for a 200-unit luxury residential complex.",
      project2_title: "Industrial Facility Upgrade",
      project2_description:
        "Full upgrade of electrical systems for a modern manufacturing plant.",
      project3_title: "Smart Office Building",
      project3_description:
        "Integration of advanced smart electrical systems in a 10-story corporate headquarters.",
      calculator_title: "Project Cost Calculator",
      calculate_costs: "Calculate Your Project Costs",
      description: "Description",
      unit: "Unit",
      quantity: "Quantity",
      total_price: "Total Price",
      enable: "Enable",
      total: "Total",
      calculate_total: "Calculate Total",
      contact_title: "Contact Us",
      contact_info: "Contact Information",
      message_us: "Send a Message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      footer_title: "Electrical solutions for your construction projects",
      rights_reserved: "All rights reserved.",
      // Item descriptions
      item_silencer: "Silencer",
      item_lightbox: "Lightbox",
      item_pipe: "Pipe 2m",
      item_electric_boiler: "Electric Boiler",
      item_led_lightbox: "LED Lightbox",
      item_short_circuit: "Short Circuit",
      item_electric_casing: "Electric Casing",
      item_conditioner: "Conditioner",
      item_cable: "Cable 3m",
      item_drink_requirer: "Drink Requirer",
      // Unit translation
      unit_piece: "piece",
    },
  },
  es: {
    translation: {
      // Translations for Spanish
      header_title: "ARM Electro",
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      calculator: "Calculadora",
      contact: "Contacto",
      hero_title: "Electrificando tus sueños de construcción",
      hero_description:
        "ARM Electro, su socio principal para soluciones eléctricas modernas en la construcción. Iluminando proyectos con experiencia e innovación.",
      discover_expertise: "Descubre nuestra experiencia",
      services_title: "Nuestros servicios integrales",
      installation: "Instalación eléctrica",
      installation_description:
        "Cableado e instalación modernos para todo tipo de edificios. Garantizando seguridad y eficiencia en cada conexión.",
      maintenance: "Mantenimiento y reparación",
      maintenance_description:
        "Mantenimiento preventivo y reparaciones rápidas para mantener sus sistemas en máxima eficiencia. Minimizar el tiempo de inactividad, maximizar la productividad.",
      consultation: "Consulta experta",
      consultation_description:
        "Aproveche nuestra experiencia de décadas para obtener asesoramiento inigualable sobre planificación eléctrica, eficiencia energética y estrategias rentables.",
      projects_title: "Nuestros proyectos destacados",
      project1_title: "Cableado de complejo residencial",
      project1_description:
        "Instalación eléctrica integral para un complejo residencial de lujo de 200 unidades.",
      project2_title: "Actualización de instalación industrial",
      project2_description:
        "Actualización completa de los sistemas eléctricos para una planta de fabricación moderna.",
      project3_title: "Edificio de oficinas inteligentes",
      project3_description:
        "Integración de sistemas eléctricos inteligentes avanzados en una sede corporativa de 10 pisos.",
      calculator_title: "Calculadora de costos del proyecto",
      calculate_costs: "Calcule los costos de su proyecto",
      description: "Descripción",
      unit: "Unidad",
      quantity: "Cantidad",
      total_price: "Precio total",
      enable: "Habilitar",
      total: "Total",
      calculate_total: "Calcular total",
      contact_title: "Contáctanos",
      contact_info: "Información de contacto",
      message_us: "Enviar un mensaje",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar",
      footer_title: "Soluciones eléctricas para tus proyectos de construcción",
      rights_reserved: "Todos los derechos reservados.",
      // Item descriptions
      item_silencer: "Silenciador",
      item_lightbox: "Caja de luz",
      item_pipe: "Tubo 2m",
      item_electric_boiler: "Caldera eléctrica",
      item_led_lightbox: "Caja de luz LED",
      item_short_circuit: "Cortocircuito",
      item_electric_casing: "Carcasa eléctrica",
      item_conditioner: "Acondicionador",
      item_cable: "Cable 3m",
      item_drink_requirer: "Requirente de bebida",
      // Unit translation
      unit_piece: "pieza",
    },
  },
  hy: {
    translation: {
      // Translations for Armenian
      header_title: "ARM Electro",
      home: "Գլխավոր",
      services: "Ծառայություններ",
      projects: "Նախագծեր",
      calculator: "Հաշվիչ",
      contact: "Կապ",
      hero_title: "Ձեր շինարարական երազանքների էլեկտրականացում",
      hero_description:
        "ARM Electro՝ Ձեր հիմնական գործընկերը շինարարության մեջ ժամանակակից էլեկտրական լուծումների համար: Լուսավորում ենք նախագծերը փորձառությամբ և նորարարությամբ:",
      discover_expertise: "Բացահայտեք մեր փորձառությունը",
      services_title: "Մեր համապարփակ ծառայությունները",
      installation: "Էլեկտրական տեղադրում",
      installation_description:
        "Ժամանակակից մալուխացում և տեղադրում բոլոր տեսակի շինությունների համար: Ապահովում ենք անվտանգություն և արդյունավետություն յուրաքանչյուր միացման մեջ:",
      maintenance: "Սպասարկում և վերանորոգում",
      maintenance_description:
        "Կանխարգելիչ սպասարկում և արագ վերանորոգումներ՝ ձեր համակարգերը գագաթնակետային արդյունավետությամբ պահելու համար: Նվազագույնի ենք հասցնում պարապուրդը, առավելագույնի՝ արտադրողականությունը:",
      consultation: "Փորձագիտական խորհրդատվություն",
      consultation_description:
        "Օգտագործեք մեր տասնամյակների փորձը՝ էլեկտրական պլանավորման, էներգիայի արդյունավետության և ծախսարդյունավետ ռազմավարությունների վերաբերյալ անզուգական խորհրդատվության համար:",
      projects_title: "Մեր նշանակալի նախագծերը",
      project1_title: "Բնակելի համալիրի մալուխացում",
      project1_description:
        "Համապարփակ էլեկտրական տեղադրում 200 միավորանոց շքեղ բնակելի համալիրի համար:",
      project2_title: "Արդյունաբերական օբյեկտի արդիականացում",
      project2_description:
        "Էլեկտրական համակարգերի լիարժեք արդիականացում ժամանակակից արտադրական գործարանի համար:",
      project3_title: "Խելացի գրասենյակային շենք",
      project3_description:
        "Առաջադեմ խելացի էլեկտրական համակարգերի ինտեգրում 10 հարկանի կորպորատիվ կենտրոնակայանում:",
      calculator_title: "Նախագծի արժեքի հաշվիչ",
      calculate_costs: "Հաշվեք Ձեր նախագծի ծախսերը",
      description: "Նկարագրություն",
      unit: "Միավոր",
      quantity: "Քանակ",
      total_price: "Ընդհանուր գին",
      enable: "Միացնել",
      total: "Ընդհանուր",
      calculate_total: "Հաշվարկել ընդհանուրը",
      contact_title: "Կապվեք մեզ հետ",
      contact_info: "Կոնտակտային տվյալներ",
      message_us: "Ուղարկել հաղորդագրություն",
      name: "Անուն",
      email: "Էլ. փոստ",
      message: "Հաղորդագրություն",
      send: "Ուղարկել",
      footer_title: "Էլեկտրական լուծումներ ձեր շինարարական նախագծերի համար",
      rights_reserved: "Բոլոր իրավունքները պաշտպանված են:",
      // Item descriptions
      item_silencer: "Խլացուցիչ",
      item_lightbox: "Լուսատուփ",
      item_pipe: "Խողովակ 2մ",
      item_electric_boiler: "Էլեկտրական կաթսա",
      item_led_lightbox: "Լուսատուփ LED",
      item_short_circuit: "Կարճացուցիչ",
      item_electric_casing: "Էլեկտրական ծածկափայտ",
      item_conditioner: "Կոնդիցիոներ",
      item_cable: "Մալուխ 3մ",
      item_drink_requirer: "Խմիչքապահանջ",
      // Unit translation
      unit_piece: "հատ",
    },
  },
}

// Function to detect the language based on the user's browser setting
const detectLanguage = () => {
  const userLanguage = navigator.language || navigator.userLanguage

  if (userLanguage.includes("hy")) {
    return "hy"
  } else if (userLanguage.includes("es")) {
    return "es"
  } else {
    return "en"
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
