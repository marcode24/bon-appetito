import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { IIngredient, IPizza, ISize } from '@interfaces/pizza.interface';

import { BuilderPizzaService } from '../../services/builder-pizza.service';

@Component({
  selector: 'app-options-pizza',
  templateUrl: './options-pizza.component.html',
  styleUrls: ['./options-pizza.component.scss']
})
export class OptionsPizzaComponent implements OnInit, OnDestroy {
  @Output() newPizza: EventEmitter<any> = new EventEmitter();

  ingredients: IIngredient[];
  sizes: ISize[];
  itemSizeSelected = 0;

  constructor(private builderPizzaService: BuilderPizzaService) { }

  ngOnDestroy(): void {
    this.builderPizzaService.resetBuilder();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.ingredients = this.builderPizzaService.getAllIngredients;
    this.sizes = this.builderPizzaService.getAllSizes;
    this.itemSizeSelected = 0;
    this.builderPizzaService.changeTotal(this.sizes[this.itemSizeSelected].price);
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
    return selectedIngredientsName.length === getLimitIngredients
      && !selectedIngredientsName.includes(ingredientName);
  }

  buildSizeName(index: number): string {
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

  get getQuantity(): number {
    return this.builderPizzaService.getQuantity;
  }

  addPizzaToCart(): void {
    if(this.builderPizzaService.selectedIngredientsName.length < 1) return;
    const {  selectedIngredients, getTotalPizza, getQuantity } = this.builderPizzaService;
    const newPizza: IPizza = {
      ingredients: selectedIngredients,
      price: getTotalPizza / getQuantity,
      quantity: getQuantity,
      size: this.getSize(this.itemSizeSelected)
    };
    this.newPizza.emit(newPizza);
    this.builderPizzaService.resetBuilder();
    this.loadData();
  }

}
