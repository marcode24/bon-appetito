import { Component } from '@angular/core';
import { pizzas } from '@data/pizzas.data';

import { AlertService } from '@services/alert.service';
import { CartService } from '@services/cart.service';

import { IPizza } from '@interfaces/pizza.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pizzas: IPizza[] = pizzas;
  constructor(
    private cartService: CartService,
    private alertService: AlertService
  ) { }

  buildDescription(index: number): string {
    let description = '';
    const ingredients = this.pizzas[index].ingredients;
    if(ingredients.length === 1) {
      return description += `${this.pizzas[index].ingredients[0].name}.`;
    }
    ingredients.forEach((el, index) => description += (index === ingredients.length - 1)
      ? `${el.name}. `
      : `${el.name}, `);
    if(ingredients.length === 2) {
      return description.replace(',', ' y ');
    }
    if(ingredients.length > 2) {
      const lastIndex = description.lastIndexOf(',');
      const descriptionBeforeLastComma = description.substring(0, lastIndex).trim();
      const descriptionAfterLastComma = description.substring(lastIndex + 1).trim();
      return `${descriptionBeforeLastComma} y ${descriptionAfterLastComma}`;
    }
    return description;
  }

  addPizzaToCart(index: number): void {
    this.cartService.addItem(this.pizzas[index]);
    this.alertService.emitAlert({ message: 'Pizza agregada a tu canasta', type: 'success' });
  }

}
