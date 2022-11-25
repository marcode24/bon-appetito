import { Component, OnInit } from '@angular/core';
import { ICart } from '@interfaces/cart.interface';

import { IPaymentMehod } from '@interfaces/payment.interface';

import { CartService } from '@services/cart.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cart: ICart = this.cartService.getCart;
  paymentMethods: IPaymentMehod[] = [
    { id: 1, selected: false, name: 'Credits - Available ', icon: 'fas fa-money-bill-wave', enabled: true, credits: this.userService.getCredits },
    { id: 2, selected: false, name: 'Paypal', icon: 'fab fa-paypal', enabled: false },
    { id: 3, selected: false, name: 'Credit Card', icon: 'far fa-credit-card', enabled: false },
    { id: 4, selected: false, name: 'Debit Card', icon: 'far fa-credit-card', enabled: false },
  ];

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  enoughtCredits(): boolean {
    return this.cart.total <= this.userService.credits;
  }

  selectMethod(id: number): void {
    this.paymentMethods = this.paymentMethods.map(el => ({ ...el, selected: el.id === id }));
  }

  hasSelectedMethod(): boolean {
    return this.paymentMethods.some(el => el.selected);
  }

  pay(): void {
    if(this.hasSelectedMethod() && this.cart.items.length > 0) {
      const selectedMethod = this.paymentMethods.find(el => el.selected) as IPaymentMehod;
      if(selectedMethod.id === 1) {
        this.userService.discountCredits(this.cart.total);
      }
      this.cartService.clearCart();
      this.resetMethods();
    }
  }

  resetMethods(): void {
    this.paymentMethods = this.paymentMethods.map(el => ({ ...el, selected: false }));
  }

}
