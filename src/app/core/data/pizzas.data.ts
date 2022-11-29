import { IPizza } from "@interfaces/pizza.interface";

import { ingredients } from "./ingredients.data";
import { sizes } from "./sizes.data";

export const pizzas: IPizza[] = [
  {
    name: 'Pepperoni',
    pathImage: 'pepperoni.png',
    quantity: 1,
    price: 152,
    ingredients: [
      ingredients[0],
    ],
    size: sizes[0],
  },
  {
    name: 'Delicarne',
    pathImage: 'delicarne.png',
    quantity: 1,
    price: 177,
    ingredients: [
      ingredients[0],
      ingredients[1],
      ingredients[2],
      ingredients[3],
    ],
    size: sizes[0],
  },
  {
    name: 'Hawaiiana',
    pathImage: 'hawaiiana.png',
    quantity: 1,
    price: 164,
    ingredients: [
      ingredients[3],
      ingredients[5],
    ],
    size: sizes[0],
  },
  {
    name: 'Caprichosa',
    pathImage: 'caprichosa.png',
    quantity: 1,
    price: 204,
    ingredients: [
      ingredients[0],
      ingredients[2],
      ingredients[7],
      ingredients[9],
    ],
    size: sizes[0],
  },
];
