import { Injectable } from '@angular/core';
import { ICart } from '@interfaces/cart.interface';
import { IPizza } from '@interfaces/pizza.interface';
import Storage from '@utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ICart;
  constructor() { }

  addItem(pizza: IPizza) {
    this.getCart();
    this.cart.items.push(pizza);
    this.saveData();
  }

  deletItem(index: number) {
    this.getCart();
    this.cart.items.splice(index, 1);
    this.saveData();
  }

  saveData(): void {
    this.updateTotal();
    Storage.saveLocalStorage('cart', JSON.stringify(this.cart));
    this.getCart();
  }

  getCart(): void {
    this.cart = JSON.parse(Storage.getItem('cart')) as ICart || { items: [], total: 0 };
  }

  updateTotal(): void {
    this.cart.total = 0;
    this.cart.items.forEach(item => this.cart.total += item.price * item.quantity);
  }


}
