export type Product = {
  id: string;
  name: string;
  generation: Generation;
  image: string;
  storage: string;
  condition: "Novo" | "Seminovo";
  price: number;
};

export const GENERATIONS = ["XR", "11", "12", "13", "14", "15", "16"] as const;
export type Generation = (typeof GENERATIONS)[number];

export const products: Product[] = [
  {
    id: "iphone-xr",
    name: "iPhone XR",
    generation: "XR",
    image: "/imagens/iphones/iphone-xr.jpg",
    storage: "64GB",
    condition: "Seminovo",
    price: 1499,
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    generation: "11",
    image: "/imagens/iphones/iphone-11.jpg",
    storage: "128GB",
    condition: "Seminovo",
    price: 1899,
  },
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    generation: "11",
    image: "/imagens/iphones/iphone-11-pro.jpg",
    storage: "256GB",
    condition: "Seminovo",
    price: 2399,
  },
  {
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max",
    generation: "11",
    image: "/imagens/iphones/iphone-11-pro-max.jpg",
    storage: "256GB",
    condition: "Seminovo",
    price: 2699,
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    generation: "12",
    image: "/imagens/iphones/iphone-12.jpg",
    storage: "128GB",
    condition: "Seminovo",
    price: 2299,
  },
  {
    id: "iphone-12-mini",
    name: "iPhone 12 mini",
    generation: "12",
    image: "/imagens/iphones/iphone-12-mini.jpg",
    storage: "128GB",
    condition: "Seminovo",
    price: 2099,
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    generation: "12",
    image: "/imagens/iphones/iphone-12-pro.jpg",
    storage: "256GB",
    condition: "Seminovo",
    price: 2799,
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    generation: "12",
    image: "/imagens/iphones/iphone-12-pro-max.jpg",
    storage: "256GB",
    condition: "Seminovo",
    price: 3099,
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    generation: "13",
    image: "/imagens/iphones/iphone-13.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 3299,
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 mini",
    generation: "13",
    image: "/imagens/iphones/iphone-13-mini.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 2999,
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    generation: "13",
    image: "/imagens/iphones/iphone-13-pro.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 4299,
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    generation: "13",
    image: "/imagens/iphones/iphone-13-pro-max.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 4699,
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    generation: "14",
    image: "/imagens/iphones/iphone-14.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 3899,
  },
  {
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    generation: "14",
    image: "/imagens/iphones/iphone-14-plus.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 4299,
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    generation: "14",
    image: "/imagens/iphones/iphone-14-pro.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 5299,
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    generation: "14",
    image: "/imagens/iphones/iphone-14-pro-max.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 5799,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    generation: "15",
    image: "/imagens/iphones/iphone-15.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 4499,
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    generation: "15",
    image: "/imagens/iphones/iphone-15-plus.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 4999,
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    generation: "15",
    image: "/imagens/iphones/iphone-15-pro.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 5999,
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    generation: "15",
    image: "/imagens/iphones/iphone-15-pro-max.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 6599,
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    generation: "16",
    image: "/imagens/iphones/iphone-16.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 5199,
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    generation: "16",
    image: "/imagens/iphones/iphone-16-plus.jpg",
    storage: "128GB",
    condition: "Novo",
    price: 5699,
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    generation: "16",
    image: "/imagens/iphones/iphone-16-pro.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 6999,
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    generation: "16",
    image: "/imagens/iphones/iphone-16-pro-max.jpg",
    storage: "256GB",
    condition: "Novo",
    price: 7699,
  },
];

export type Accessory = {
  id: string;
  name: string;
  description: string;
};

export const accessories: Accessory[] = [
  {
    id: "capinhas",
    name: "Capinhas",
    description: "Diversos modelos e cores para proteger seu iPhone com estilo.",
  },
  {
    id: "peliculas",
    name: "Películas",
    description: "Películas de vidro temperado para a tela do seu aparelho.",
  },
  {
    id: "carregadores",
    name: "Carregadores",
    description: "Carregadores originais e compatíveis, de parede e portáteis.",
  },
  {
    id: "cabos",
    name: "Cabos",
    description: "Cabos Lightning e USB-C de alta durabilidade.",
  },
  {
    id: "fones",
    name: "Fones",
    description: "Fones de ouvido com e sem fio para o seu dia a dia.",
  },
  {
    id: "outros",
    name: "Outros acessórios",
    description: "Suportes, adaptadores e itens úteis para o seu iPhone.",
  },
];

export const formatPrice = (value: number): string =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
