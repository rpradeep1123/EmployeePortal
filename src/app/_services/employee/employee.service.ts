import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/_models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API_URL: string = "http://localhost:4000/employees";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.API_URL).pipe(
      map(res => {
        return res as Employee[];
      })
    )
  }
}
