import { EventEmitter, Injectable } from '@angular/core';
import { ingredients } from '@data/ingredients.data';
import { sizes } from '@data/sizes.data';

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
  private limitIngredients = 4;
  private totalPizza = 0;
  private quantity = 1;

  private ingredients: IIngredient[] = ingredients;
  private sizes: ISize[] = sizes;

  resetBuilder(): void {
    this.ingredients.map(el => el.selected = false);
    this.quantity = 1;
    this.totalPizza = 0;
    this.hideAllIngredients.emit(true);
  }

  changeSelection(ingredient: IIngredient): void {
    const { selector, name: ingredientName, price } = ingredient;
    const paramsEmitter: IEventIngredient = { selector, show: false };
    const indexIngredient = this.ingredients.findIndex(item => item.name === ingredientName);
    const selectedIngredient = !this.ingredients[indexIngredient].selected;
    if (this.hasSelectedEnoughItems) {
      this.ingredients[indexIngredient].selected = false;
    } else {
      this.ingredients[indexIngredient].selected = selectedIngredient;
      paramsEmitter['show'] = selectedIngredient;
    }
    this.changeTotal(selectedIngredient ? price : -price);
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
