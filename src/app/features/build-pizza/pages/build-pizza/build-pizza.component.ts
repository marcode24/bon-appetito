import { Component, OnInit } from '@angular/core';

import { CartService } from '@services/cart.service';

import { IPizza } from '@interfaces/pizza.interface';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.scss']
})
export class BuildPizzaComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addPizzaToCart(newPizza: IPizza): void {
    this.cartService.addItem(newPizza);
  }

  get cartHasItems(): boolean {
    return this.cartService.getCart.items.length > 0;
  }

  get cartItems(): number {
    return this.cartService.getCart.items.length;
  }

}
