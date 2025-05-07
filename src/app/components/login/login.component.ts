import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLogged:boolean = false
  constructor(private userAuthServise:UserAuthService) {
}
   ngOnInit()  {
    this.isLogged = this.userAuthServise.isLoggedIn()
    

   }
login(){
  this.userAuthServise.login("salma@gmail.com", "123456")
  this.isLogged = this.userAuthServise.isLoggedIn()
}


   }
