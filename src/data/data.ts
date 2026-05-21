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

export const InfoContacto: InfoContactoType = {
  name: "Celia Conde",
  job: "Psicóloga Familiar",
  colegiada: "M-29410",
  phone: "+34 657 15 26 27",
  email: "psicologiaceliaconde@gmail.com",
  instagram: "@celiacondepsicologa",
  address: "Calle del Aviador Zorita 4, 28020 Madrid",
  mapLink: "https://www.google.com/maps?q=Positivamente+Centro+de+Psicología&output=embed",
  whatsappLink: "https://wa.me/34657152627",
  instagramLink: "https://www.instagram.com/celiacondepsicologa"
};

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

export const Formacion: FormacionItem[] = [
  {
    title: "Licenciatura en Psicología",
    description: "Universidad Pontificia de Comillas",
    year: "2014"
  },
  {
    title: "Master en terapia familiar y de pareja",
    description: "Universidad Pontificia de Comillas",
    year: "2017"
  },
  {
    title: "Especialista en Psicoterapia y Psicodrama",
    description: "Asociación para el Estudio de la Psicoterapia y el Psicodrama",
    year: "2019"
  },
  {
    title: "Experta en violencia de género",
    description: "XXX",
    year: "2019"
  },
  
  // {
  //   title: `Nº Colegiada ${InfoContacto.colegiada}`,
  //   description: "Colegio Oficial de Psicólogos de Madrid",
  //   year: "En vigor"
  // }
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
    number: "1",
    title: "Contacto",
    description: "Escríbeme por WhatsApp o formulario para consultar disponibilidad."
  },
  {
    number: "2",
    title: "Primera Sesión",
    description: "Nos conocemos, evalúas tu situación y definimos objetivos."
  },
  {
    number: "3",
    title: "Proceso",
    description: "Trabajamos semanalmente con tareas y reflexiones entre sesiones."
  },
  {
    number: "4",
    title: "Avance",
    description: "Consolidamos cambios y planificamos el alta cuando estés listo."
  }
];

export const FAQs: FAQ[] = [
  {
    title: "¿Aceptáis seguros médicos?",
    description: "Actualmente trabajo como psicóloga general sanitaria de forma privada. Puedo emitir facturas para que solicites el reembolso a tu seguro si tu póliza lo incluye."
  },
  {
    title: "¿Cuánto dura cada sesión?",
    description: "Las sesiones individuales duran 50 minutos y las de pareja 60 minutos."
  },
  {
    title: "¿Qué pasa si necesito cancelar?",
    description: "Puedes cancelar o reprogramar hasta 24 horas antes sin coste. Pasado ese tiempo, se abonará el 50% de la sesión."
  },
  {
    title: "¿Es mejor online o presencial?",
    description: "Ambas modalidades son igual de efectivas según la evidencia científica. Depende de tu preferencia y comodidad."
  },
  {
    title: "¿Qué métodos de pago aceptas?",
    description: "Acepto pago en efectivo, transferencia bancaria y tarjetas de crédito/débito. El pago se realiza al finalizar cada sesión."
  },
  {
    title: "¿Es confidencial la terapia?",
    description: "Absolutamente. Todo lo hablado en las sesiones es completamente confidencial, salvo en situaciones excepcionales donde haya riesgo para la persona o terceros."
  }
];

