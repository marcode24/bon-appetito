import { Component, OnInit } from '@angular/core';

import { AlertService } from '@services/alert.service';
import { CartService } from '@services/cart.service';
import { UserService } from '@services/user.service';

import { ICart } from '@interfaces/cart.interface';
import { IPaymentMehod } from '@interfaces/payment.interface';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
  ) {
    if(this.cartService.cart.items.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

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
        this.paymentMethods[0].credits = this.userService.getCredits;
      }
      this.cartService.clearCart();
      this.resetMethods();
      this.alertService.emitAlert({ message: 'Pedido Realizado Correctamente', type: 'success' });
    }
  }

  resetMethods(): void {
    this.paymentMethods = this.paymentMethods.map(el => ({ ...el, selected: false }));
  }

}
