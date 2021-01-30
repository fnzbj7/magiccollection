import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { StatusCodes } from 'http-status-codes';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    selectedPage = 'Login';
    loading = false;
    submitted = false;

    faFacebookSquare = faFacebookSquare;

    constructor(
        private authService: AuthenticationService,
        private formBuilder: FormBuilder,
        private authServiceSocial: SocialAuthService,
        private router: Router,
    ) {}

    ngOnInit() {
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
                // After logging in with social, we sign out from that certain social network
                // (and not from our site)
                this.authServiceSocial.signOut();
                this.router.navigate(['/']);
            },
            err => {
                this.authServiceSocial.signOut();
            },
        );
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
                    this.router.navigate(['/']);
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

    // convenience getter for easy access to form fields
    get logForm() {
        return this.loginForm.controls;
    }

    get logemail() {
        return this.loginForm.get('email');
    }

    get logpass() {
        return this.loginForm.get('password');
    }
}
