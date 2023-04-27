import { Component, Input } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
    @Input() book:Book={} as Book;
    constructor(private CartService : CartService) { }

    IsinCart:boolean=false;

    AddToCart()
    { 
      this.IsinCart=true;
      this.CartService.add(this.book);
    }

    RemovefromCart()
    {
      this.IsinCart=false;
      this.CartService.remove(this.book);
    }
}
