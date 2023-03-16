import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private cartService: CartService;
  public items: Product[];

  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.items = this.cartService.getItems();
  }
}
