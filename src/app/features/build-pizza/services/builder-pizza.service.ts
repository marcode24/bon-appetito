import { EventEmitter, Injectable } from '@angular/core';
import { IIngredient, ISize } from '@interfaces/pizza.interface';

interface IEventIngredient {
  selector: string;
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BuilderPizzaService {

  showIngredient: EventEmitter<IEventIngredient> = new EventEmitter();
  hideAllIngredients: EventEmitter<boolean> = new EventEmitter();

  ingredientsSelected: IIngredient[] = [];
  private limitIngredients: number = 4;
  private totalPizza: number = 0;
  private quantity: number = 1;

  private ingredients: IIngredient[] = [
    { selected: false, name: 'basil', price: 50, selector: 'basils' },
    { selected: false, name: 'chili', price: 52, selector: 'chilis' },
    { selected: false, name: 'ham', price: 52, selector: 'hams' },
    { selected: false, name: 'mint', price: 52, selector: 'mints' },
    { selected: false, name: 'mushroom', price: 52, selector: 'mushrooms' },
    { selected: false, name: 'olives', price: 50, selector: 'olives' },
    { selected: false, name: 'pepper-green', price: 38, selector: 'peppers-green' },
    { selected: false, name: 'pepper-orange', price: 38, selector: 'peppers-orange' },
    { selected: false, name: 'pepper-yellow', price: 40, selector: 'peppers-yellow' },
    { selected: false, name: 'pepperoni', price: 15, selector: 'pepperonis' },
    { selected: false, name: 'salami', price: 15, selector: 'salamis' },
    { selected: false, name: 'tomato', price: 15, selector: 'tomatoes' },
  ];

  private sizes: ISize[] = [
    { sizeName: 'Chica', price: 157, slices: 8, size: 25, measurement: 'cm' },
    { sizeName: 'Mediana', price: 208, slices: 10, size: 33, measurement: 'cm' },
    { sizeName: 'Grande', price: 285, slices: 12, size: 38, measurement: 'cm' },
    { sizeName: 'Familiar', price: 320, slices: 14, size: 42, measurement: 'cm' },
  ];

  constructor() { }

  resetBuilder(): void {
    this.ingredients.map(el => el.selected = false);
    this.quantity = 1;
    this.totalPizza = 0;
    this.hideAllIngredients.emit(true);
  }

  changeSelection(ingredient: IIngredient): void {
    const { selector, name: ingredientName, price } = ingredient;
    let paramsEmitter: IEventIngredient = { selector, show: false };
    const indexIngredient = this.ingredients.findIndex(item => item.name === ingredientName);
    if (this.hasSelectedEnoughItems) {
      this.ingredients[indexIngredient].selected = false;
    } else {
      const selected = !this.ingredients[indexIngredient].selected;
      this.ingredients[indexIngredient].selected = selected;
      paramsEmitter['show'] = selected;
      this.changeTotal(selected ? price : -price);
    }
    this.showIngredient.emit(paramsEmitter);
  }

  changeTotal(price: number): void {
    this.totalPizza += price;
  }

  changeQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  get getAllIngredients(): IIngredient[] {
    return this.ingredients;
  }

  get getAllSizes(): ISize[] {
    return this.sizes;
  }

  get hasSelectedEnoughItems(): boolean {
    return this.ingredients.filter(item => item.selected).length === this.limitIngredients;
  }

  get selectedIngredientsName(): string[] {
    return this.selectedIngredients.map(item => item.name);
  }

  get selectedIngredients(): IIngredient[] {
    return this.ingredients.filter(item => item.selected);
  }

  get getLimitIngredients(): number {
    return this.limitIngredients;
  }

  get getTotalPizza(): number {
    return this.totalPizza * this.quantity;
  }

  get getQuantity(): number {
    return this.quantity;
  }

}
