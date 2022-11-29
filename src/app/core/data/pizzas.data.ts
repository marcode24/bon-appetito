import { IPizza } from "@interfaces/pizza.interface";
import { ingredients } from "./ingredients.data";

export const pizzas: IPizza[] = [
  {
    name: 'Pepperoni',
    pathImage: 'pepperoni.png',
    quantity: 1,
    price: 152,
    ingredients: [
      ingredients[0],
    ],
    size: { sizeName: 'Chica', price: 127, slices: 8, size: 25, measurement: 'cm' },
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
    size: { sizeName: 'Chica', price: 127, slices: 8, size: 25, measurement: 'cm' },
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
    size: { sizeName: 'Chica', price: 127, slices: 8, size: 25, measurement: 'cm' },
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
    size: { sizeName: 'Chica', price: 127, slices: 8, size: 25, measurement: 'cm' },
  },
];
