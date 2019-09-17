import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  loginForm: FormGroup;
  isSubmitted = false;
  loginFailed: boolean;

  return: string;

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(res => {
      if (res) {
        this.router.navigateByUrl(this.return);
      } else {
        this.loginFailed = true;
        return;
      }
    })
  }
}
