import * as images from '../assets/burger'

export function getBaseIngredients (ingredients = []) {
  return ['bun-top', ...ingredients, 'bun-bottom']
}

export const ingredients = [
  {
    name: 'bun-bottom',
    label: 'Bottom bun',
    price: 0.25,
    image: images.bunBottom,
    disablePick: true
  },
  {
    name: 'bun-top',
    label: 'Top bun',
    price: 0.25,
    margin: 0,
    image: images.bunTop,
    marginBottom: -3,
    disablePick: true
  },
  {
    name: 'meat',
    label: 'Meat',
    price: 1,
    image: images.meat,
    marginBottom: -1
  },
  {
    name: 'cheese',
    label: 'Cheese',
    price: 0.7,
    image: images.cheese,
    marginBottom: -10,
    marginTop: -1
  },
  {
    name: 'bacon',
    label: 'Bacon',
    price: 1.2,
    image: images.bacon,
    marginBottom: -4
  },
  {
    name: 'egg',
    label: 'Egg',
    price: 0.7,
    image: images.egg,
    marginBottom: -9
  },
  {
    name: 'onions',
    label: 'Onions',
    price: 0.4,
    image: images.onions,
    marginBottom: -1
  },
  {
    name: 'pickles',
    label: 'Pickles',
    price: 0.5,
    image: images.pickles,
    marginBottom: -7
  },
  {
    name: 'salad',
    label: 'Salad',
    price: 0.55,
    image: images.salad,
    marginBottom: -7,
    marginTop: -3
  },
  {
    name: 'tomato',
    label: 'Tomatoes',
    price: 0.4,
    image: images.tomato,
    marginBottom: -1
  },
  {
    name: 'mayo',
    label: 'Mayonnaise',
    price: 0.6,
    image: images.mayo,
    marginBottom: -8
  },
  {
    name: 'ketchup',
    label: 'Ketchup',
    price: 0.4,
    image: images.ketchup,
    marginBottom: -8
  }
];
