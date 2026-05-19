import type { IconType } from "react-icons";

export interface InfoContactoType {
  name: string;
  job: string;
  phone: string;
  email: string;
  instagram: string;
  address: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface Especialidad {
  title: string;
  description: string;
  icon: IconType; 
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface FormacionItem {
  title: string;
  description: string;
  year: string;
}

export interface Valor {
  title: string;
  description: string;
  icon: IconType; 
}

export interface Terapia {
  title: string;
  description: string;
  duration: string;
  frequency: string;
}

export interface Paso {
  number: string;
  title: string;
  description: string;
}

export interface FAQ {
  title: string;
  description: string;
}