export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}