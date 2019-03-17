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
  selectedPage = 'Login';
  loading = false;
  submitted = false;

  constructor(public bsModalRef: BsModalRef, private authService: AuthenticationService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
  });
  }

  onPageChange(selectedPage: string) {
    this.selectedPage = selectedPage;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.registration(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                // this.router.navigate([this.returnUrl]);
                this.loading = false;
            },
            error => {
                // this.error = error;
                this.loading = false;
            });

  }
}
