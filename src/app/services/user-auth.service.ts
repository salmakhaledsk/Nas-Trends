import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedStatus!: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  }
  login(email: string, password: string) {
    //token
    let token = 'ssaallmmaa123456kkaalleedd';
    localStorage.setItem('token', token);
    this.isLoggedStatus.next(true);
  }
  logOut() {
    localStorage.removeItem('token');
    this.isLoggedStatus.next(false);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token') ? true : false;
  }
  //change in nav bar login logout without reload
  getIsLoggedStatus(): BehaviorSubject<boolean> {
    return this.isLoggedStatus;
  }
}
