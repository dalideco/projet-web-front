import { Component, Input, OnInit } from '@angular/core';
import Item from 'src/models/item.model';
import ItemType from 'src/enums/ItemType.enum';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;
  itemTypes: typeof ItemType;

  constructor(private cart: CartService) {
    this.itemTypes = ItemType;
  }

  public get isInCart():boolean {
    return Boolean(this.cart.cart.find(i => i.id===this.item.id))
  }

 

  ngOnInit(): void {}

  addToCart() {
    this.cart.add(this.item);
  }
  removeFromCart(){
    this.cart.remove(this.item)
  }
}
