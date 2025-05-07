import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLogged:boolean = false
    constructor(private userAuthServise:UserAuthService) {
  
     }

     ngOnInit()  {
      
      // this.isLogged = this.userAuthServise.isLoggedIn()
      this.userAuthServise.getIsLoggedStatus().subscribe((status) => {
        this.isLogged = status;
      });
      
     }
     logOut(){
      this.userAuthServise.logOut()
      this.isLogged = this.userAuthServise.isLoggedIn()
    }

}
