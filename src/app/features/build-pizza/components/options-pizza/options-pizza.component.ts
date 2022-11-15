import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IIngredient, IPizza, ISize } from '@components/interfaces/pizza.interface';

import { BuilderPizzaService } from '../../services/builder-pizza.service';

@Component({
  selector: 'app-options-pizza',
  templateUrl: './options-pizza.component.html',
  styleUrls: ['./options-pizza.component.scss']
})
export class OptionsPizzaComponent implements OnInit {
  @Output() newPizza: EventEmitter<any> = new EventEmitter();

  ingredients = this.builderPizzaService.getAllIngredients;
  sizes = this.builderPizzaService.getAllSizes;
  itemSizeSelected: number = 0;

  constructor(private builderPizzaService: BuilderPizzaService) { }

  ngOnInit(): void {
    this.builderPizzaService.changeTotal(this.sizes[0].price);
  }

  changeSize(index: number) {
    const oldSizePrice = this.getSize(this.itemSizeSelected).price;
    this.builderPizzaService.changeTotal(-oldSizePrice);
    this.itemSizeSelected = index;
    const newSizePrice = this.getSize(this.itemSizeSelected).price;
    this.builderPizzaService.changeTotal(newSizePrice);
  }

  private getSize(index: number): ISize {
    return this.sizes[index];
  }

  changeSelection(ingredient: IIngredient) {
    this.builderPizzaService.changeSelection(ingredient);
  }

  hasSelectedEnoughItems(ingredientName: string): boolean {
    const { selectedIngredientsName, getLimitIngredients } = this.builderPizzaService;
    return selectedIngredientsName.length === getLimitIngredients && !selectedIngredientsName.includes(ingredientName);
  }

  builSizeName(index: number): string {
    const { sizeName, slices, size, measurement } = this.sizes[index];
    return `${sizeName}: ${slices} Rebanada${slices > 1 ? 's': ''} (${size} ${measurement})`;
  }

  get hasSelectedAtLeastOneIngredient(): boolean {
    return this.builderPizzaService.selectedIngredientsName.length < 1;
  }

  get getTotalPizza(): number {
    return this.builderPizzaService.getTotalPizza;
  }

  changeQuantity(quantity: number): void {
    this.builderPizzaService.changeQuantity(quantity);
  }

  addPizzaToCart(): void {
    if(this.builderPizzaService.selectedIngredientsName.length < 1) return;
    const newPizza: IPizza = {
      ingredients: this.builderPizzaService.selectedIngredients,
      price: this.builderPizzaService.getTotalPizza,
      quantity: this.builderPizzaService.getQuantity,
      size: this.getSize(this.itemSizeSelected)
    };
    this.newPizza.emit(newPizza);
  }

}
