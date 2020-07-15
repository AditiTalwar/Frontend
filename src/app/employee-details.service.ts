import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  path = 'http://localhost:8080/employeeData';
  constructor(private http: HttpClient) {

   }

   getEmployeeData(name:string, phone:string) {
    return this.http.get(`${this.path}/${name}/${phone}`);
  }
}
