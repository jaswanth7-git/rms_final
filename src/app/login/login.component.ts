import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private UserService:UserService){}
  values:any;
  register(values:any){
    console.log(values);
    this.values = values;
        this.UserService.createUser(this.values).subscribe((response:any)=>{
      console.log(response);
     
    })
  }
   
  ngOnInit(){

  }
   
  login(values:any){
    console.log(values);
  }

}
