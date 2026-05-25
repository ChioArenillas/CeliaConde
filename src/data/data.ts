import type {
  Especialidad,
  Review,
  InfoContactoType,
  FormacionItem,
  Valor,
  Terapia,
  Paso,
  FAQ,
} from "./types";
import {
  FiWind,
  FiHeart,
  FiUsers,
  FiZap,
  FiCloudRain,
  FiDroplet,
  FiLock,
  FiSmile,
  FiBookOpen,
} from "react-icons/fi";

export const InfoContacto: InfoContactoType = {
  name: "Celia Conde",
  job: "Psicóloga Familiar",
  colegiada: "M-29410",

  phone: "+34 657 15 26 27",
  phoneLink: "tel:+34657152627",

  email: "psicologiaceliaconde@gmail.com",
  emailLink: "mailto:psicologiaceliaconde@gmail.com",

  address: "Calle del Aviador Zorita 4, 28020 Madrid",
  addressLink: "https://www.google.com/maps/place/Positivamente+Centro+de+Psicolog%C3%ADa/@40.447226,-3.698455,15z/data=!4m6!3m5!1s0xd422902120b073b:0x290c9bc3d0085a55!8m2!3d40.4472259!4d-3.6984552!16s%2Fg%2F11clyczqf3?hl=es-ES&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
  mapLink:"https://www.google.com/maps?q=Positivamente+Centro+de+Psicología&output=embed",

  whatsappLink: "https://wa.me/34657152627",

  instagram: "@celiacondepsicologa",
  instagramLink: "https://www.instagram.com/celiacondepsicologa",
};

export const Especialidades: Especialidad[] = [
  {
    id: 1,
    title: "Ansiedad",
    description:
      "Herramientas para gestionar la incertidumbre y recuperar la calma.",
    icon: FiWind,
  },
  {
    id: 2,
    title: "Autoestima",
    description:
      "Trabajo profundo para fortalecer tu valor personal y seguridad.",
    icon: FiHeart,
  },
  {
    id: 3,
    title: "Terapia de Pareja",
    description:
      "Espacio para mejorar la comunicación y reconectar emocionalmente.",
    icon: FiUsers,
  },
  {
    id: 4,
    title: "Estrés",
    description:
      "Estrategias para manejar la presión diaria y prevenir el burnout.",
    icon: FiZap,
  },
  {
    id: 5,
    title: "Depresión",
    description:
      "Acompañamiento compasivo para encontrar luz en momentos oscuros.",
    icon: FiCloudRain,
  },
  {
    id: 6,
    title: "Duelo",
    description: "Procesar pérdidas y encontrar un nuevo sentido de vida.",
    icon: FiDroplet,
  },
];

export const Reviews: Review[] = [
  {
    id: 1,
    name: "María G.",
    text: "Llegué con mucha ansiedad y Celia me dio las herramientas para gestionarla. Su empatía es increíble.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos R.",
    text: "Las sesiones de pareja nos salvaron. Hemos aprendido a comunicarnos sin herirnos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena M.",
    text: "Un espacio seguro donde pude ser yo misma sin juicios. Gracias por todo.",
    rating: 5,
  },
];

export const Formacion: FormacionItem[] = [
  {
    id: 1,
    title: "Licenciatura en Psicología",
    description: "Universidad Pontificia de Comillas",
    year: "2014",
  },
  {
    id: 2,
    title: "Master en terapia familiar y de pareja",
    description: "Universidad Pontificia de Comillas",
    year: "2017",
  },
  {
    id: 3,
    title: "Especialista en Psicoterapia y Psicodrama",
    description:
      "Asociación para el Estudio de la Psicoterapia y el Psicodrama",
    year: "2019",
  },
  {
    id: 4,
    title: "Experta en violencia de género",
    description: "XXX",
    year: "2019",
  },

  // {
  //   title: `Nº Colegiada ${InfoContacto.colegiada}`,
  //   description: "Colegio Oficial de Psicólogos de Madrid",
  //   year: "En vigor"
  // }
];

export const Valores: Valor[] = [
  {
    id: 1,
    title: "Empatía",
    description: "Te escucho sin juzgar, entendiendo tu mundo desde dentro.",
    icon: FiHeart,
  },
  {
    id: 2,
    title: "Confidencialidad",
    description: "Todo lo que hables aquí queda estrictamente entre nosotros.",
    icon: FiLock,
  },
  {
    id: 3,
    title: "Cercanía",
    description: "Un trato humano, cálido y profesional adaptado a ti.",
    icon: FiSmile,
  },
  {
    id: 4,
    title: "Evidencia Científica",
    description:
      "Técnicas validadas científicamente para garantizar resultados.",
    icon: FiBookOpen,
  },
];

export const Terapias: Terapia[] = [
  {
    id: 1,
    title: "Terapia Individual",
    description: "Sesiones uno a uno enfocadas en tus objetivos personales.",
    duration: "50 minutos",
    frequency: "Semanal / Quincenal",
  },
  {
    id: 2,
    title: "Terapia de Pareja",
    description: "Para mejorar la comunicación y resolver conflictos.",
    duration: "60 minutos",
    frequency: "Quincenal",
  },
  {
    id: 3,
    title: "Terapia Online",
    description: "La misma calidad y cercanía desde la comodidad de tu casa.",
    duration: "50 minutos",
    frequency: "Flexible",
  },
];
export const Pasos: Paso[] = [
  {
    id: 1,
    number: "1",
    title: "Contacto",
    description:
      "Escríbeme por WhatsApp o formulario para consultar disponibilidad.",
  },
  {
    id: 2,
    number: "2",
    title: "Primera Sesión",
    description: "Nos conocemos, evalúas tu situación y definimos objetivos.",
  },
  {
    id: 3,
    number: "3",
    title: "Proceso",
    description:
      "Trabajamos semanalmente con tareas y reflexiones entre sesiones.",
  },
  {
    id: 4,
    number: "4",
    title: "Avance",
    description:
      "Consolidamos cambios y planificamos el alta cuando estés listo.",
  },
];

export const FAQs: FAQ[] = [
  {
    id: 1,
    title: "¿Aceptáis seguros médicos?",
    description:
      "Actualmente trabajo como psicóloga general sanitaria de forma privada. Puedo emitir facturas para que solicites el reembolso a tu seguro si tu póliza lo incluye.",
  },
  {
    id: 2,
    title: "¿Cuánto dura cada sesión?",
    description:
      "Las sesiones individuales duran 50 minutos y las de pareja 60 minutos.",
  },
  {
    id: 3,
    title: "¿Qué pasa si necesito cancelar?",
    description:
      "Puedes cancelar o reprogramar hasta 24 horas antes sin coste. Pasado ese tiempo, se abonará el 50% de la sesión.",
  },
  {
    id: 4,
    title: "¿Es mejor online o presencial?",
    description:
      "Ambas modalidades son igual de efectivas según la evidencia científica. Depende de tu preferencia y comodidad.",
  },
  {
    id: 5,
    title: "¿Qué métodos de pago aceptas?",
    description:
      "Acepto pago en efectivo, transferencia bancaria y tarjetas de crédito/débito. El pago se realiza al finalizar cada sesión.",
  },
  {
    id: 6,
    title: "¿Es confidencial la terapia?",
    description:
      "Absolutamente. Todo lo hablado en las sesiones es completamente confidencial, salvo en situaciones excepcionales donde haya riesgo para la persona o terceros.",
  },
];
