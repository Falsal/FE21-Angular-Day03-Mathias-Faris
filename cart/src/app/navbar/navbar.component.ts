import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  cartLength;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.cartLength = this.cartService.itemsLength();
  }

}
