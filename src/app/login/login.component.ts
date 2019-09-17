import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { Login } from '../_models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  public loginRequest: Login;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    /* this.authService.login(this.loginRequest).subscribe(res => {
      if (res) {
        this.router.navigate(['/home']);
      }
    }); */
    this.authService.login(this.loginRequest);
    this.router.navigate(['/home']);
  }
}
