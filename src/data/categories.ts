import type { Category } from '../types';

const PARTY_PACK_FORM = 'https://forms.gle/Bn3pRZTjHVxfwfiB9';

export const CATEGORIES: Category[] = [
  {
    id: 'cakes',
    title: 'Cakes & Bento Boxes',
    imageText: 'Custom Layer Cake',
    description: 'Bespoke, custom-designed cakes for any occasion. Available in various shapes such as Heart, Letter, Number, Round, Square, sizes including Bento/Lunchbox, 1-3 tiers, and up to 7 layers.',
    formLink: 'https://forms.gle/Bn3pRZTjHVxfwfiB9',
    image: '/assets/products/custom-cake.png',
    products: [
      { id: 1, name: 'Custom Cakes', description: 'Large custom celebration cakes. Available in various flavors and designs.', price: 'From R300', image: '/assets/products/custom-cake.png' },
      { id: 2, name: 'Bento Cake', description: 'A trendy single-serving cake, perfect for a personalized gift.', price: 'R175', image: '/assets/products/bento-cake.png' },
      { id: 3, name: 'Bento Box Cake', description: 'A curated mini-package, perfect for tasting or gifting.', price: 'R230', image: '/assets/products/bento-box.png' },
    ],
  },
  {
    id: 'cupcakes',
    title: 'Cupcakes & Bakes',
    imageText: 'Elegant Cupcakes',
    description: 'Our most popular individual servings, including cupcakes and fudgy brownie options. Perfect for sharing or treating yourself.',
    formLink: 'https://forms.gle/3E5CP2VPhL6tKwmM9',
    image: '/assets/header.png',
    products: [
      { id: 4, name: 'Cupcakes', description: 'Classic and gourmet flavors, beautifully decorated.', price: 'From R100', image: '/assets/header.png' },
      { id: 9, name: 'Brownie Slab', description: 'A dense, rich slab of fudgy chocolate goodness.', price: 'R150', image: '/assets/products/browinie-slab.png' },
      { id: 5, name: 'Cupcakes (Individual)', description: 'Perfectly sized individual cupcakes.', price: 'From R100', image: '/assets/products/cupcake-individual.png' },
      { id: 10, name: 'Brownies (Individual)', description: 'Perfectly sized individual brownies.', price: 'From R100', image: '/assets/products/brownies.jpg' },
    ],
  },
  {
    id: 'party-packs',
    title: 'Party Packs',
    imageText: 'Party Pack Assortment',
    description: 'Make your celebration unforgettable with our perfectly curated party packs! Each pack brings joy and deliciousness to your special event.',
    formLink: PARTY_PACK_FORM,
    image: '/assets/products/cookies.webp',
    products: [
      { id: 101, name: 'Classic Pack', description: 'Classic treats, big smiles.', price: 'R45', image: '/assets/products/cookies.webp' },
      { id: 102, name: 'Mini Magic Pack', description: 'Simple and memorable box.', price: 'R55', image: '/assets/products/sugar-cookies.png' },
      { id: 103, name: 'Birthday Buzz Box', description: 'A little extra magic in every pack.', price: 'R65', image: '/assets/products/cupcakebox.jpg' },
      { id: 104, name: 'Super Celebration Box', description: 'The ultimate wow-factor gift.', price: 'R80', image: '/assets/products/dessert-cups.png' },
    ],
  },
  {
    id: 'wantmore',
    title: 'Confections & Treats',
    imageText: 'Cookies and Brownies',
    description: 'Our specialty collection of chocolate-covered delights, personalized cookies, and bite-sized desserts. See the full menu for Cake Cups, Dessert Cups, Truffles, and more!',
    formLink: 'https://forms.gle/pWNSnqjbX9Pe5SGXA',
    image: '/assets/products/sugar-cookies.png',
    products: [
      { id: 6, name: 'Cakesicles', description: 'Cake pop filling molded like a popsicle, dipped in chocolate.', price: 'From R150', image: '/assets/products/cakesicles.jpg' },
      { id: 7, name: 'Truffles', description: 'Rich chocolate ganache balls, elegantly coated.', price: 'From R105', image: '/assets/products/truffles.png' },
      { id: 11, name: 'Chocolate-Covered Oreos', description: 'Decadent Oreos dipped in chocolate and decorated.', price: 'From R95', image: '/assets/products/chocolate-covered-oreo.jpg' },
      { id: 12, name: 'Sugar Cookies', description: 'Custom-designed and decorated sugar cookies.', price: 'From R120', image: '/assets/products/sugar-cookies.png' },
      { id: 8, name: 'Dessert Cups', description: 'Layered mini-desserts in a cup, perfect for any occasion.', price: 'From R90', image: '/assets/products/dessert-cups.png' },
    ],
  },
];
