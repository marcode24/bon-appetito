import { Component, OnInit } from '@angular/core';

import { AlertService } from '@services/alert.service';
import { CartService } from '@services/cart.service';
import { UserService } from '@services/user.service';

import { ICart } from '@interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: ICart;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cart = this.cartService.getCart;
  }

  clearCart(): void {
    if(this.cart.items.length > 0) {
      this.cartService.clearCart();
      this.loadCart();
    }
  }

  buildSizeName(index: number): string {
    const { sizeName, slices } = this.cart.items[index].size;
    return `Pizza ${sizeName} - ${slices} Rebanada${slices > 1 ? 's': ''}`;
  }

  buildDescription(index: number): string {
    let description: string = '';
    const ingredients = this.cart.items[index].ingredients;
    if(ingredients.length === 1) {
      return description += `${this.cart.items[index].ingredients[0].name}.`;
    }
    ingredients
      .forEach((el, index) => description += (index === ingredients.length - 1) ? `${el.name}. ` : `${el.name}, `);
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

  changeQuantity(quantity: number, index: number): void {
    this.cartService.changeQuantity(index, quantity);
    this.loadCart();
  }

  deleteItem(index: number) {
    this.cartService.deletItem(index);
    this.loadCart();
  }

  addCreditsFree(): void {
    this.userService.addCredits();
    const freeCredits = this.userService.getCreditsFree;
    this.alertService.emitAlert({ message: `Haz obtenido $${freeCredits} gratis`, type: 'success' });
  }

}
