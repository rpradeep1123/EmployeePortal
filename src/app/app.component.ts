import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeePortal';

  constructor(private authService:AuthenticationService){
    
  }
}
