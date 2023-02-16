import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private httpClient:HttpClient) { }
  getItems(){
    return this.httpClient.get("http://localhost:8000/api/categories/");
  }
}
