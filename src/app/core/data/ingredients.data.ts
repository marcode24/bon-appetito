import { IIngredient } from "@interfaces/pizza.interface";

export const ingredients: IIngredient[] = [
  { selected: false, pathImage: 'pepperoni.png', name: 'pepperoni', price: 25, selector: 'pepperonis' },
  { selected: false, pathImage: 'salami.png', name: 'salami', price: 25, selector: 'salamis' },
  { selected: false, pathImage: 'bacon.png', name: 'tocino', price: 20, selector: 'bacons' },
  { selected: false, pathImage: 'ham.png', name: 'jamón', price: 20, selector: 'hams' },
  { selected: false, pathImage: 'mushroom.png', name: 'champiñones', price: 18, selector: 'mushrooms' },
  { selected: false, pathImage: 'pineapple.png', name: 'piña', price: 17, selector: 'pineapples' },
  { selected: false, pathImage: 'onion.png', name: 'cebolla', price: 15, selector: 'onions' },
  { selected: false, pathImage: 'pepper-green.png', name: 'pimiento verde', price: 16, selector: 'peppers-green' },
  { selected: false, pathImage: 'pepper-orange.png', name: 'pimiento naranja', price: 16, selector: 'peppers-orange' },
  { selected: false, pathImage: 'pepper-yellow.png', name: 'pimiento amarillo', price: 16, selector: 'peppers-yellow' },
  { selected: false, pathImage: 'basil.png', name: 'albahaca', price: 15, selector: 'basils' },
  { selected: false, pathImage: 'chili.png', name: 'chile', price: 12, selector: 'chilis' },
  { selected: false, pathImage: 'olives.png', name: 'aceitunas', price: 16, selector: 'olives' },
  { selected: false, pathImage: 'mint.png', name: 'menta', price: 12, selector: 'mints' },
  { selected: false, pathImage: 'tomato.png', name: 'jitomate extra', price: 15, selector: 'tomatoes' },
];
