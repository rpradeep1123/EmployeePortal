import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/_models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn: boolean = false;
  public API_URL: string = "http://localhost:4000/loginUser";

  constructor(private router: Router, private http: HttpClient) { }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  login(loginReq: Login) {
    return this.http.get(this.API_URL).pipe(
      map(res => {
        if (res["password"] == loginReq.Password && res["username"] == loginReq.Username) {
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      })
    );
  }
}
