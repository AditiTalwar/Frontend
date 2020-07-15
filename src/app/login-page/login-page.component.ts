import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  validators: Validators;
  empData: any;
  errorMessage: any;

  constructor(
    private router: Router,
    private employeeDetailsService: EmployeeDetailsService)
    {
      }
  ngOnInit(): void {
    this.validators = [
      // Validators.minLength(8),
      Validators.maxLength(15),
      Validators.required
    ]
    this.loginForm = new FormGroup({
      name: new FormControl('', this.validators),
      phone: new FormControl('', this.validators)
    });
  }

  onSubmit() {
      const name = this.loginForm.get('name').value;
      const phone = this.loginForm.get('phone').value;
      this.getEmployeeDetails(name, phone);
    
  }
  getEmployeeDetails(name:string, phone:string){
    this.employeeDetailsService.getEmployeeData(name, phone).subscribe( (employeeData:any) => {
    console.log(employeeData)
    if (employeeData && employeeData.error) {
      this.errorMessage = employeeData.error
    } else{
      this.router.navigate(['/welcome'], {state: {data:employeeData.data}});
    }
    })
}

}
