import { Component, OnInit, Input, ViewChild, ElementRef,OnDestroy } from '@angular/core';
import Item from 'src/models/item.model';
import ItemType from 'src/enums/ItemType.enum';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit,OnDestroy {
  @Input() items: Item[] = [];
  @ViewChild('scrollable') scrollable!: ElementRef;
  itemTypes:typeof ItemType;

  selectedItem = 0;

  constructor() {
    this.itemTypes= ItemType
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    
  }

  setSelected(i: number) {
    this.selectedItem = i;

    const scrollableEl: Element = this.scrollable.nativeElement;
    scrollableEl.scrollTo({ left: window.innerWidth * i, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
  }
}
