import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  validators: Validators;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.validators = [
      Validators.minLength(8),
      Validators.maxLength(15),
      Validators.required
    ]
    this.loginForm = new FormGroup({
      username: new FormControl('', this.validators),
      password: new FormControl('', this.validators)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/welcome']);
    }
  }

}
