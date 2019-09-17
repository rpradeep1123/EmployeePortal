import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  signOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  login(loginReq) {
    this.isLoggedIn=true;
    return true;
    /* return this.http.post('local', loginReq).pipe(
      map(res => {
        if (res) this.isLoggedIn = true;
        return res;
      })
    ); */
  }
}
