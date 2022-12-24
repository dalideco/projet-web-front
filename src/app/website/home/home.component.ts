import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/http/item.service';
import Item from 'src/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bigItems: Item[] = []
  smallItems: Item[] = []

  constructor(private readonly items: ItemService) { }

  ngOnInit(): void {
    this.items.getFeaturedItems().subscribe(items => {
      if(items.length <=3){
        this.bigItems = items
        return
      }
      this.bigItems= items.slice(0,3)
      this.smallItems= items.slice(3)
      
    })
  }

}
