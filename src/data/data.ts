import type { 
  Especialidad, 
  Review, 
  InfoContactoType, 
  FormacionItem, 
  Valor, 
  Terapia, 
  Paso, 
  FAQ 
} from './types';
import { FiWind, FiHeart, FiUsers, FiZap, FiCloudRain, FiDroplet, FiLock, FiSmile, FiBookOpen } from "react-icons/fi";

export const Especialidades: Especialidad[] = [
  {
    title: "Ansiedad",
    description: "Herramientas para gestionar la incertidumbre y recuperar la calma.",
    icon: FiWind
  },
  {
    title: "Autoestima",
    description: "Trabajo profundo para fortalecer tu valor personal y seguridad.",
    icon: FiHeart
  },
  {
    title: "Terapia de Pareja",
    description: "Espacio para mejorar la comunicación y reconectar emocionalmente.",
    icon: FiUsers
  },
  {
    title: "Estrés",
    description: "Estrategias para manejar la presión diaria y prevenir el burnout.",
    icon: FiZap
  },
  {
    title: "Depresión",
    description: "Acompañamiento compasivo para encontrar luz en momentos oscuros.",
    icon: FiCloudRain
  },
  {
    title: "Duelo",
    description: "Procesar pérdidas y encontrar un nuevo sentido de vida.",
    icon: FiDroplet
  }
];

export const Reviews: Review[] = [
  {
    name: "María G.",
    text: "Llegué con mucha ansiedad y Celia me dio las herramientas para gestionarla. Su empatía es increíble.",
    rating: 5
  },
  {
    name: "Carlos R.",
    text: "Las sesiones de pareja nos salvaron. Hemos aprendido a comunicarnos sin herirnos.",
    rating: 5
  },
  {
    name: "Elena M.",
    text: "Un espacio seguro donde pude ser yo misma sin juicios. Gracias por todo.",
    rating: 5
  }
];

export const InfoContacto: InfoContactoType = {
  phone: "+34 600 000 000",
  email: "contacto@celiaconde.com",
  instagram: "@celiaconde.psicologia",
  address: "Calle Mayor 12, 1ºA, Madrid",
  whatsappLink: "https://wa.me/34600000000",
  instagramLink: "https://instagram.com/tuusuario"
};

export const Formacion: FormacionItem[] = [
  {
    title: "Grado en Psicología",
    description: "Universidad Complutense de Madrid",
    year: "2015"
  },
  {
    title: "Máster en Psicología Clínica y de la Salud",
    description: "Colegio Oficial de Psicólogos",
    year: "2017"
  },
  {
    title: "Especialista en Terapia Familiar Sistémica",
    description: "Instituto de Terapia Familiar",
    year: "2019"
  },
  {
    title: "Nº Colegiada M-12345",
    description: "Colegio Oficial de Psicólogos de Madrid",
    year: "En vigor"
  }
];

export const Valores: Valor[] = [
  {
    title: "Empatía",
    description: "Te escucho sin juzgar, entendiendo tu mundo desde dentro.",
    icon: FiHeart
  },
  {
    title: "Confidencialidad",
    description: "Todo lo que hables aquí queda estrictamente entre nosotros.",
        icon: FiLock

  },
  {
    title: "Cercanía",
    description: "Un trato humano, cálido y profesional adaptado a ti.",
        icon: FiSmile

  },
  {
    title: "Evidencia Científica",
    description: "Técnicas validadas científicamente para garantizar resultados.",
        icon: FiBookOpen

  }
];

export const Terapias: Terapia[] = [
  {
    title: "Terapia Individual",
    description: "Sesiones uno a uno enfocadas en tus objetivos personales.",
    duration: "50 minutos",
    frequency: "Semanal / Quincenal"
  },
  {
    title: "Terapia de Pareja",
    description: "Para mejorar la comunicación y resolver conflictos.",
    duration: "60 minutos",
    frequency: "Quincenal"
  },
  {
    title: "Terapia Online",
    description: "La misma calidad y cercanía desde la comodidad de tu casa.",
    duration: "50 minutos",
    frequency: "Flexible"
  }
];

export const Pasos: Paso[] = [
  {
    number: "01",
    title: "Contacto",
    description: "Escríbeme por WhatsApp o formulario para consultar disponibilidad."
  },
  {
    number: "02",
    title: "Primera Sesión",
    description: "Nos conocemos, evalúas tu situación y definimos objetivos."
  },
  {
    number: "03",
    title: "Proceso",
    description: "Trabajamos semanalmente con tareas y reflexiones entre sesiones."
  },
  {
    number: "04",
    title: "Avance",
    description: "Consolidamos cambios y planificamos el alta cuando estés listo."
  }
];

export const FAQs: FAQ[] = [
  {
    question: "¿Aceptáis seguros médicos?",
    answer: "Actualmente trabajo como psicóloga general sanitaria de forma privada. Puedo emitir facturas para que solicites el reembolso a tu seguro si tu póliza lo incluye."
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer: "Las sesiones individuales duran 50 minutos y las de pareja 60 minutos."
  },
  {
    question: "¿Qué pasa si necesito cancelar?",
    answer: "Puedes cancelar o reprogramar hasta 24 horas antes sin coste. Pasado ese tiempo, se abonará el 50% de la sesión."
  },
  {
    question: "¿Es mejor online o presencial?",
    answer: "Ambas modalidades son igual de efectivas según la evidencia científica. Depende de tu preferencia y comodidad."
  }
];