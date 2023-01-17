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

  constructor() {}

  add(item: Item) {
    this.cartSubject.next([...this.cart, item]);
  }

  remove(item: Item) {
    this.cartSubject.next(this.cart.filter((i) => i.id !== item.id));
  }
}
