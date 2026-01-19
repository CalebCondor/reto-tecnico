"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Header
  nav_home: { es: "Inicio", en: "Home" },
  nav_services: { es: "Servicios", en: "Services" },
  nav_pricing: { es: "Precios", en: "Pricing" },
  nav_about: { es: "Nosotros", en: "About" },
  nav_contact: { es: "Contacto", en: "Contact" },
  
  // Additional Services Section
  services_title: { es: "Servicios adicionales", en: "Additional Services" },
  services_description: { 
    es: "Nuestros abogados especializados le ofrecen representación experta frente a los desafíos más complejos con el IRS y las autoridades de inmigración.", 
    en: "Our specialized lawyers offer you expert representation against the most complex challenges with the IRS and immigration authorities." 
  },
  services_button: { es: "Agendar consulta", en: "Schedule Consultation" },
  service_1: { es: "Representación en vistas sobre embargos.", en: "Representation in lien hearings." },
  service_2: { es: "Negociación de gravámenes.", en: "Lien negotiation." },
  service_3: { es: "Representación ante el US Tax Court.", en: "Representation before the US Tax Court." },
  service_4: { es: "Representación ante el US Board of Immigration.", en: "Representation before the US Board of Immigration." },
  service_5: { es: "Solicitud de perdón de penalidades.", en: "Penalty waiver request." },
  service_6: { es: "Representación en casos de robo de identidad contributiva.", en: "Representation in cases of tax identity theft." },
  service_7: { es: "Ofertas en compromiso para negociar el monto de la deuda.", en: "Offers in compromise to negotiate the debt amount." },
  
  // Featured Card
  promo_title: { es: "Verificación de elegibilidad gratuita de 15 minutos", en: "15-Minute Free Eligibility Verification" },
  promo_description: { 
    es: "Descubra si califica y qué obstáculos podrían estar en su camino antes de gastar un dólar.", 
    en: "Find out if you qualify and what obstacles might be in your way before spending a dollar." 
  },
  promo_button: { es: "Consultar ahora", en: "Consult Now" },
  
  // Testimonials
  testimonials_title_1: { es: "Clientes", en: "Satisfied" },
  testimonials_title_2: { es: "satisfechos", en: "clients" },
  testimonials_title_3: { es: "confían en Puente Legal", en: "trust Puente Legal" },

  // Begin Section
  begin_title: { es: "Comience con certeza", en: "Begin with Certainty" },
  begin_description: { es: "Antes de aplicar, realizamos un diagnóstico profundo para asegurar que su caso sea exitoso.", en: "Before applying, we conduct a deep diagnosis to ensure your case is successful." },
  begin_step_1_title: { es: "Revisión de su expediente migratorio", en: "Immigration File Review" },
  begin_step_2_title: { es: "Revisión de sus antecedentes penales", en: "Criminal Record Review" },
  begin_step_3_title: { es: "Revisión de sus aspectos contributivos con el IRS", en: "IRS Tax Aspect Review" },
  begin_cost_text: { es: "Costo de investigación integral desde:", en: "Comprehensive investigation cost from:" },
  begin_footer_text: { es: "Este análisis es indispensable para recomendar el paquete de naturalización adecuado.", en: "This analysis is essential to recommend the appropriate naturalization package." },

  // Packages
  package_title: { es: "Nuestros Paquetes", en: "Our Packages" },
  package_from: { es: "Desde", en: "From" },
  package_start_button: { es: "Comenzar ahora", en: "Start Now" },
  package_1_name: { es: "Naturalización + Plan de Pago", en: "Naturalization + Payment Plan" },
  package_1_item_1: { es: "Solicitud de inmigración.", en: "Immigration application." },
  package_1_item_2: { es: "Coordinación de plan de pago con IRS.", en: "Payment plan coordination with IRS." },
  package_2_name: { es: "Naturalización + Análisis financiero", en: "Naturalization + Financial Analysis" },
  package_2_popular: { es: "Más Popular", en: "Most Popular" },
  package_2_item_1: { es: "Solicitud de inmigración.", en: "Immigration application." },
  package_2_item_2: { es: "Coordinación de plan de pago parcial con IRS (Si califica).", en: "Partial payment plan coordination with IRS (If eligible)." },
  package_3_name: { es: "Naturalización + Protección contra Embargos I", en: "Naturalization + Lien Protection I" },
  package_3_item_1: { es: "Solicitud de inmigración.", en: "Immigration application." },
  package_3_item_2: { es: "Protección continua a su cuenta mientras completamos los requisitos para un plan de pago.", en: "Continuous protection to your account while we complete the requirements for a payment plan." },
  package_3_item_3: { es: "Coordinación con plan de pago con IRS.", en: "IRS payment plan coordination." },
  package_3_footer: { es: "(No incluye cuota de presentación de $725)", en: "(Does not include $725 filing fee)" },

  // Changes Section
  changes_main_title: { es: "Nuevas reglas más estrictas requieren cambios", en: "New Stricter Rules Require Changes" },
  changes_current_label: { es: "La Situación Actual", en: "The Current Situation" },
  changes_current_title: { es: "La mayoría de firmas solo presentan solicitudes. Luego descubre problemas:", en: "Most firms only file applications. Then problems are discovered:" },
  changes_current_item_1: { es: "Récords criminales ocultos", en: "Hidden criminal records" },
  changes_current_item_2: { es: "Impuestos sin pagar", en: "Unpaid taxes" },
  changes_current_item_3: { es: "Exámenes de ciudadanía reprobados", en: "Failed citizenship exams" },
  changes_result_label: { es: "Resultado:", en: "Result:" },
  changes_result_text: { es: "Solicitud negada, tiempo y dinero perdido", en: "Application denied, time and money lost" },
  changes_solution_label: { es: "Nuestra Solución", en: "Our Solution" },
  changes_solution_title: { es: "Lo preparamos ANTES de solicitar:", en: "We prepare you BEFORE applying:" },
  changes_solution_item_1: { es: "Corregir problemas temprano", en: "Fix problems early" },
  changes_solution_item_2: { es: "Sin sorpresas", en: "No surprises" },
  changes_solution_item_3: { es: "Tasas de aprobación más altas", en: "Higher approval rates" },
  changes_solution_item_4: { es: "Ciudadanía con confianza", en: "Citizenship with confidence" },

  // Hero Section
  hero_title_1: { es: "Su camino completo a la ", en: "Your complete path to " },
  hero_title_accent: { es: "ciudadanía", en: "citizenship" },
  hero_description: { 
    es: "No solo tramitamos papeles, lo preparamos para el éxito. La única firma que ofrece verificación de antecedentes penales, asesoría tributaria y preparación completa de ciudadanía y representación legal. Todo en un solo lugar.", 
    en: "We don't just process papers, we prepare you for success. The only firm that offers criminal background checks, tax advice, and complete citizenship preparation and legal representation. Everything in one place." 
  },
  hero_btn_options: { es: "Ver opciones", en: "View options" },
  hero_btn_consult: { es: "Consulta gratuita", en: "Free consultation" },

  // Services Section
  services_360_title_1: { es: "Nuestro enfoque ", en: "Our " },
  services_360_title_accent: { es: "360", en: "360 approach" },
  services_360_title_2: { es: " cubre todas las áreas", en: " covers all areas" },
  services_360_description: { 
    es: "Miles de solicitudes son denegadas por no poder probar \"Good Moral Character\" que va desde tener un record criminal hasta no haber declarado impuestos. Nos encargamos de verificar todo.", 
    en: "Thousands of applications are denied for failing to prove \"Good Moral Character,\" ranging from having a criminal record to failing to file taxes. We take care of verifying everything." 
  },
  service_card_1_title: { es: "Realizamos su Background Check", en: "We perform your Background Check" },
  service_card_1_desc: { es: "Importante para conocer y corregir cualquiera de los errores que pudiera haber declarado. Nosotros revisaremos todo en detalle.", en: "Important to know and correct any errors you may have declared. We will review everything in detail." },
  service_card_2_title: { es: "Analizamos sus Impuestos", en: "We Analyze your Taxes" },
  service_card_2_desc: { es: "Osbert tales afecta su solicitud. Analizamos la situación y gestiones fiscales para asegurar los estándares.", en: "Tax issues affect your application. We analyze the situation and tax management to ensure standards." },
  service_card_3_title: { es: "Te Preparamos para el Examen", en: "We Prepare you for the Exam" },
  service_card_3_desc: { es: "Nuestro sistema único de aprendizaje en línea le permite para pasar con éxito su examen de ciudadanía.", en: "Our unique online learning system allows you to successfully pass your citizenship exam." },

  // Denial Section
  denial_title_1: { es: "Cada año, más de 100,000 Solicitudes de ciudadanía son ", en: "Every year, more than 100,000 Citizenship applications are " },
  denial_title_accent: { es: "DENEGADAS", en: "DENIED" },
  denial_description: { 
    es: "Las restricciones son mayores cada año: Muchas solicitudes son denegadas por fallar en el examen, no poder probar buen carácter moral (DUI, delitos menores, deudas de pensiones alimenticias, deudas con el IRS)", 
    en: "Restrictions are greater every year: Many applications are denied for failing the exam, failing to prove good moral character (DUI, minor offenses, alimony debts, debts with the IRS)" 
  },

  // Footer
  footer_brand_phrase: { es: "Construimos el puente entre su residencia permanente y la ciudadanía estadounidense.", en: "We build the bridge between your permanent residence and US citizenship." },
  footer_contact: { es: "Contacto", en: "Contact" },
  footer_schedule: { es: "Lun-Vie 9AM-6PM | Sáb con cita previa", en: "Mon-Fri 9AM-6PM | Sat by appointment" },
  footer_services: { es: "Servicios", en: "Services" },

  // Contact Modal
  contact_modal_title: { es: "Para comenzar o si tiene preguntas sobre que opción es la adecuada para su caso:", en: "To begin or if you have questions about which option is right for your case:" },
  contact_modal_call_label: { es: "Llámenos al", en: "Call us at" },
  contact_modal_write_label: { es: "Escríbanos por", en: "Write to us via" },
  contact_modal_schedule_days: { es: "Lunes a Viernes", en: "Monday to Friday" },
  contact_modal_schedule_hours: { es: "de 8am a 6pm EST", en: "from 8am to 6pm EST" },
  contact_modal_chat_text: { es: "Contáctenos via chat haciendo ", en: "Contact us via chat by " },
  contact_modal_chat_link: { es: "click aquí", en: "clicking here" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
