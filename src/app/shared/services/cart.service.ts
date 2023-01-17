import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Item from 'src/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Item[]>([]);

  public get cart(): Item[] {
    return this.cartSubject.value;
  }

  constructor() {
    const item = localStorage.getItem('cart');
    if (!item) return;
    this.cartSubject.next(JSON.parse(item));
  }

  add(item: Item) {
    if (this.cart.find((i) => i.id === item.id)) return;
    this.cartSubject.next([...this.cart, item]);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  remove(item: Item) {
    this.cartSubject.next(this.cart.filter((i) => i.id !== item.id));
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
