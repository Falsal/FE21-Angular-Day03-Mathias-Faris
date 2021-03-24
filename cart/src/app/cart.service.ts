
import { Injectable } from '@angular/core';


@Injectable({

  providedIn: 'root'

})

export class CartService {

  items = [];

  constructor() { }

 

  addToCart(product) {

    this.items.push(product);

  }

 

  getItems() {

    return this.items;

  }

  itemsLength(){
    return this.items.length;
  }
 

  clearCart() {

    this.items = [];

    return this.items;

  }

 

}
