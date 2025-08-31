export interface News {
  id: number;
  title: string;
  description: string;
  image?: string; // URL de la imagen, opcional
  url?: string;   // URL externa de la noticia, opcional
}
