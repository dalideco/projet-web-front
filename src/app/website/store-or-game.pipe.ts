import { Pipe, PipeTransform } from '@angular/core';
import ItemType from 'src/enums/ItemType.enum';
import Item from 'src/models/item.model';

@Pipe({
  name: 'storeOrGame',
})
export class StoreOrGamePipe implements PipeTransform {
  transform(value: Item, ...args: unknown[]): string {
    
    if (value.type === ItemType.account) {
      return value.store.image;
    } else {
      return value.games[0].image;
    }
  }
}
