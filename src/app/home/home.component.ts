import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee.model';
import { EmployeeService } from '../_services/employee/employee.service';
import { AuthenticationService } from '../_services/authentication/authentication.service';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employeeList: Employee[] = [];

  constructor(private empService: EmployeeService,private authService:AuthenticationService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(res => {
      this.employeeList = res;
    });

    var fixmeTop = $('.fixme').offset().top;
    $(window).scroll(function () {
      var currentScroll = $(window).scrollTop()
      if (currentScroll >= fixmeTop) {
        $('.fixme').css({
          position: 'fixed',
          top: '0',
          left: '0',
          'background-color': 'white',
          width: '100%',
          'z-index': '9999',
          'box-shadow': '2px 3px 11px 3px #ecefee'
        });
      } else {
        $('.fixme').css({
          position: 'relative',
          width:'auto',
          margin:'0'
        });
      }

    });
  }

  logout(){
    this.authService.logout();
  }


}
