import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusCodes } from 'http-status-codes';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reg',
    templateUrl: './reg.component.html',
    styleUrls: ['./reg.component.css'],
})
export class RegComponent implements OnInit {
    registrationForm!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private authService: AuthenticationService,
        private formBuilder: FormBuilder,
        private router: Router,
    ) {}

    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
                ],
            ],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    onRegistrationSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            console.log('invalid volt');
            return;
        }

        this.loading = true;
        this.authService
            .registration(
                this.regForm.email.value,
                this.regForm.username.value,
                this.regForm.password.value,
            )
            .pipe(first())
            .subscribe(
                () => {
                    this.loading = false;
                    this.router.navigate(['/login']);
                },
                error => {
                    console.error(error);
                    console.error(error.status);
                    if (error.status === StatusCodes.CONFLICT) {
                        // Email already in use
                        this.registrationForm.get('email').setErrors({ emailUsed: true });
                    }
                    this.loading = false;
                },
            );
    }

    // convenience getter for easy access to form fields
    get regForm() {
        return this.registrationForm.controls;
    }

    get regemail() {
        return this.registrationForm.get('email');
    }

    get regpass() {
        return this.registrationForm.get('password');
    }

    get regname() {
        return this.registrationForm.get('username');
    }
}
