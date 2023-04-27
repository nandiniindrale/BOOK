import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getbook()
  {
    return  [
      {
         name:'The Best of Tenali Raman',
         author:'Rungeen Singh',
         image: 'https://m.media-amazon.com/images/I/51tkwtlcnML._SX330_BO1,204,203,200_.jpg',
         amount:800,
      },
      {
        name:'365 Tales of Hanuman',
         author:' Swayam Ganguly ',
         image:'https://m.media-amazon.com/images/I/51MbuIKxYcL._SX361_BO1,204,203,200_.jpg',
         amount:700,
         
      },
      {
        name:'Great Stories for Children',
         author:'Ruskin Bond ',
         image:'https://m.media-amazon.com/images/I/51HZN1uIVqL._SX321_BO1,204,203,200_.jpg',
         amount:500,
        
      },
      {
        name:'108 Panchatantra Stories',
        author:' Maple Press ',
        image:'https://m.media-amazon.com/images/I/51trTdAFECL._SX385_BO1,204,203,200_.jpg',
        amount:600,
        },
        {
           name:'Beauty and the Beast',
           author:'Giada Francia ',
           image:'https://m.media-amazon.com/images/I/514xvB8mORL._SX375_BO1,204,203,200_.jpg',
           amount:995,
        }
        ];
  }
}
