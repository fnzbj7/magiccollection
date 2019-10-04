import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from './authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  registrationForm: FormGroup;
  selectedPage = 'Login';
  loading = false;
  submitted = false;

  constructor(public bsModalRef: BsModalRef, private authService: AuthenticationService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onPageChange(selectedPage: string) {
    this.selectedPage = selectedPage;
  }

  // convenience getter for easy access to form fields
  get regForm() { return this.registrationForm.controls; }

  onRegistrationSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.registration(this.regForm.email.value, this.regForm.username.value, this.regForm.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.loading = false;
          this.onPageChange('Login');
        },
        error => {
          console.error(error);
          console.error(error.status);
          if (error.status === 420) {
            // Email already in use
            this.registrationForm.get('email').setErrors({emailUsed: true});
          }
          this.loading = false;
        });
  }

  // convenience getter for easy access to form fields
  get logForm() { return this.loginForm.controls; }

  onLoginSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    console.log('onLoginSubmit() start');

    this.loading = true;
    this.authService.login(this.logForm.email.value, this.logForm.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.loading = false;
          this.bsModalRef.hide();
        },
        error => {
          console.error(error);
          console.error(error.status);
          if (error.status === 421) {
            this.loginForm.get('password').setErrors({wrongPass: true});
          }
          this.loading = false;
        });
  }

  get regemail() {
    return this.registrationForm.get('email');
  }

  get logemail() {
    return this.loginForm.get('email');
  }

  get logpass() {
    return this.loginForm.get('password');
  }
}
