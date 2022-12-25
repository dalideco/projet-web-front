import { Pipe, PipeTransform } from '@angular/core';
import ItemType from 'src/enums/ItemType.enum';
import Item from 'src/models/item.model';

@Pipe({
  name: 'itemTitle'
})
export class ItemTitlePipe implements PipeTransform {

  transform(value: Item, ...args: unknown[]): string {
    if(value.type === ItemType.account){
      return value.store.title + " account"
    }else{
      return value.games[0].title + " key"
    }
  }

}
