import { Component } from '@angular/core';

import { AlertService } from '@services/alert.service';
import { CartService } from '@services/cart.service';

import { IPizza } from '@interfaces/pizza.interface';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.scss']
})
export class BuildPizzaComponent {

  constructor(
    private cartService: CartService,
    private alertService: AlertService,
  ) { }

  addPizzaToCart(newPizza: IPizza): void {
    this.cartService.addItem(newPizza);
    const plural = newPizza.quantity > 1 ? 's' : '';
    const message = `Pizza${plural} agregada${plural} a tu canasta`;
    this.alertService.emitAlert({ message, type: 'success' });
  }

  get cartHasItems(): boolean {
    return this.cartService.getCart.items.length > 0;
  }

  get cartItems(): number {
    return this.cartService.getCart.items.length;
  }

}
