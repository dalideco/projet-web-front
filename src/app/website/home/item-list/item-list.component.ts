import { Component, Input, OnInit } from '@angular/core';
import Item from 'src/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items?: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
