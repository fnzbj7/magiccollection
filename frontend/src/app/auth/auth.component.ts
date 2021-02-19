import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SocialUser, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { MatDialogRef } from '@angular/material/dialog';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { StatusCodes } from 'http-status-codes';

@Component({
    selector: 'app-auth-component',
    templateUrl: './auth.component.html',
    styleUrls: ['auth.component.css'],
})
export class AuthComponent implements OnInit {
    loginForm!: FormGroup;
    registrationForm!: FormGroup;
    selectedPage = 'Login';
    loading = false;
    submitted = false;

    faFacebookSquare = faFacebookSquare;

    user!: SocialUser;
    loggedIn!: boolean;

    constructor(
        public dialogRef: MatDialogRef<AuthComponent>,
        private authService: AuthenticationService,
        private formBuilder: FormBuilder,
        private authServiceSocial: SocialAuthService,
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

        this.loginForm = this.formBuilder.group({
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    async onFacebookLogin() {
        const user: SocialUser = await this.authServiceSocial.signIn(
            FacebookLoginProvider.PROVIDER_ID,
        );
        this.authService.facebookSignIn(user.authToken).subscribe(
            () => {
                this.authServiceSocial.signOut();
                this.dialogRef.close();
            },
            err => {
                this.authServiceSocial.signOut();
            },
        );
    }

    onPageChange(selectedPage: string) {
        this.selectedPage = selectedPage;
    }

    // convenience getter for easy access to form fields
    get regForm() {
        return this.registrationForm.controls;
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
                    // this.router.navigate([this.returnUrl]);
                    this.loading = false;
                    this.onPageChange('Login');
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
    get logForm() {
        return this.loginForm.controls;
    }

    onLoginSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        console.log('onLoginSubmit() start');

        this.loading = true;
        this.authService
            .login(this.logForm.email.value, this.logForm.password.value)
            .pipe(first())
            .subscribe(
                () => {
                    this.loading = false;
                    this.dialogRef.close();
                },
                error => {
                    console.error(error);
                    console.error(error.status);
                    if (
                        error.status === StatusCodes.UNAUTHORIZED ||
                        error.status === StatusCodes.BAD_REQUEST
                    ) {
                        this.loginForm.get('password').setErrors({ wrongPass: true });
                    }
                    this.loading = false;
                },
            );
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

    get logemail() {
        return this.loginForm.get('email');
    }

    get logpass() {
        return this.loginForm.get('password');
    }
}
