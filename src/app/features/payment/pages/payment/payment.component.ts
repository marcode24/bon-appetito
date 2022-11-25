import { Component, OnInit } from '@angular/core';

import { IPaymentMehod } from '@interfaces/payment.interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentMethods: IPaymentMehod[] = [
    { id: 1, name: 'Credits - Available ', icon: 'fas fa-money-bill-wave', enabled: true, credits: 0 },
    { id: 2, name: 'Paypal', icon: 'fab fa-paypal', enabled: false },
    { id: 3, name: 'Credit Card', icon: 'far fa-credit-card', enabled: false },
    { id: 4, name: 'Debit Card', icon: 'far fa-credit-card', enabled: false },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
