import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // package that have some methods and proberties that will help us to grap the value from the URL and use it with some buildin bethods

import { CartService } from '../cart.service';


import { products } from '../products';


@Component({

  selector: 'app-product-details',

  templateUrl: './product-details.component.html',

  styleUrls: ['./product-details.component.css']

})

export class ProductDetailsComponent implements OnInit {


  product: {name : string, price:number, description?: string};

  constructor(private route: ActivatedRoute, private cartService: CartService) { }



  addToCart(product) {

    window.alert('Your product has been added to the cart!');

    this.cartService.addToCart(product);

  }


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

    this.product = products[+params.get('productId')];

  });

  }

}