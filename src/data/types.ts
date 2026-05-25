import type { IconType } from "react-icons";

export interface InfoContactoType {
  name: string;
  job: string;
  colegiada: string;

  phone: string;
  phoneLink: string;

  email: string;
  emailLink: string;

  address: string;
  addressLink: string;
  mapLink: string;

  whatsappLink: string;
  instagram: string;
  instagramLink: string;
}

export interface Especialidad {
  id: number;
  title: string;
  description: string;
  icon: IconType; 
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface FormacionItem {
    id: number;

  title: string;
  description: string;
  year: string;
}

export interface Valor {
    id: number;

  title: string;
  description: string;
  icon: IconType; 
}

export interface Terapia {
    id: number;

  title: string;
  description: string;
  duration: string;
  frequency: string;
}

export interface Paso {
    id: number;

  number: string;
  title: string;
  description: string;
}

export interface FAQ {
    id: number;

  title: string;
  description: string;
}