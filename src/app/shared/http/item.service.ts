import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Item from 'src/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private readonly url = environment.apiUrl+"/item"

  constructor(private readonly http: HttpClient) {}

  getFeaturedItems(){
    return this.http.get<Item[]>(this.url)
  }
}
