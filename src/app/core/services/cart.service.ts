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
    this.loadCartFromStorage();
    this.cart.items.push(pizza);
    this.saveData();
  }

  deletItem(index: number) {
    this.loadCartFromStorage();
    this.cart.items.splice(index, 1);
    this.saveData();
  }

  clearCart(): void {
    this.cart.items = [];
    this.cart.total = 0;
    Storage.deleteLocalStorage('cart');
  }

  saveData(): void {
    this.updateTotal();
    Storage.saveLocalStorage('cart', JSON.stringify(this.cart));
    this.loadCartFromStorage();
  }

  loadCartFromStorage(): void {
    this.cart = JSON.parse(Storage.getItem('cart')) as ICart || { items: [], total: 0 };
  }

  updateTotal(): void {
    this.cart.total = 0;
    this.cart.items.forEach(item => this.cart.total += item.price * item.quantity);
  }

  changeQuantity(index: number, quantity: number): void {
    this.cart.items[index].quantity = quantity;
    this.saveData();
  }

  get getCart(): ICart {
    this.loadCartFromStorage();
    return this.cart;
  }



}
