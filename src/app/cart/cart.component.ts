import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private cartService: CartService;
  private formBuilder: FormBuilder;
  public items: Product[];
  public checkoutForm;

  constructor(cartService: CartService, formBuilder: FormBuilder) {
    this.cartService = cartService;
    this.formBuilder = formBuilder;

    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  onSubmit(): void {
    // process checkout data here

    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
