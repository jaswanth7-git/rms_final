import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
items:any;
breakfastItems:any;
starterItems:any;
lunchItems:any;
drinkItems:any;
constructor(private itemService:ItemService){}
ngOnInit(){
  this.itemService.getItems().subscribe((response:any)=>{
    // console.log(response);
    // this.items=response;
    this.breakfastItems=response[0].products;
    this.starterItems=response[1].products;
    this.lunchItems=response[2].products;
    this.drinkItems=response[3].products;
    });
}
}
