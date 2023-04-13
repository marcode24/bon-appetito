import { Component } from '@angular/core';

import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private readonly cartService: CartService,
  ) { }

  get hasItemsCart(): boolean {
    return this.cartService.getCart.items.length > 0;
  }

}
