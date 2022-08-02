const list = [
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
  {
    title: "Haircut",
    price: "$39",
    description:
      "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
  },
];

export const getServices = () => {
  return list;
};

const products = [
  {
    id: 0,
    name: "  Nettoyant Visage Purifiant ",
    price: 13,
    image:
      "https://horace.co/cdn-cgi/image/fit=contain,width=391,format=auto,dpr=1/media/catalog/product//h/o/horace_visage_nettoyrant-purifiant_car1.jpg",
  },
  {
    id: 1,
    name: " Cire Coiffante ",
    price: 13,
    image:
      "https://horace.co/cdn-cgi/image/fit=contain,width=391,format=auto,dpr=1/media/catalog/product//h/o/horace-cire_coiffante-car1-nm.jpg",
  },
  {
    id: 2,
    name: " Shampoing Purifiant Doux ",
    price: 13,
    image:
      "https://horace.co/cdn-cgi/image/fit=contain,width=391,format=auto,dpr=1/media/catalog/product//h/o/horace-shampoing_doux_purifiant-car1.jpg",
  },
  {
    id: 3,
    name: " Après-Shampoing Fortifiant ",
    price: 15,
    image:
      "https://horace.co/cdn-cgi/image/fit=contain,width=391,format=auto,dpr=1/media/catalog/product//h/o/horace-apres_shampoing_fortifiant-car1_2.jpg",
  },
  {
    id: 4,
    name: " Shampoing Hydratant Doux ",
    price: 14,
    image:
      "https://horace.co/cdn-cgi/image/fit=contain,width=391,format=auto,dpr=1/media/catalog/product//h/o/horace-shampoing-nourrissant-car1.jpg",
  },
];

export const getImportantProducts = () => {
  return products.slice(1, 5);
};
export const getProducts = () => {
  return products;
};
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};
const comments = [
  {
    id: 0,
    content:
      "Premier produit utilisé de la marque et vraiment très bonne impression. Utilisation quotidienne du produit qui me donne la peau douce et propre. Aucune rougeur malgré une peau très sensible, je recommande vraiment.",
    name: "Devid Smith",
  },
  {
    id: 1,
    content:
      "Très facile à utiliser, le parfum, la couleur et les résultats sont top ! Je l'ai utilisé depuis deux mois, une fois par semaine, et j'ai l'impression d'avoir la peau plus douce et avec beaucoup moins d'imperfections.",
    name: "Lui Harison",
  },
  {
    id: 2,
    content:
      "Un super déodorant qui tien effectivement 12h, avec une belle odeur ! pour éviter les traces sur les vêtements, je vous le recommande !",
    name: "Rafayel Kim",
  },
];

export const getComments = () => {
  return comments;
};
