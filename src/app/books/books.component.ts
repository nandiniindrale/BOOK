import { Component } from '@angular/core';
import {Book} from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

constructor(private bookservice:BooksService){
    this.books=this.bookservice.getbook();
}
books : Book[]=[];

  AddToCart(book:Book)
{
   console.log(book)
}

isShowing: boolean = true;
}

