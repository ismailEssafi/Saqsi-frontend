import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  public errorMessage;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.errorMessage = '';
  }

  loginForm = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern('^0[0-9]{9}$')]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      this.authService.login(this.loginForm.value).subscribe(
        (user) => {
          if (user.status == 202) {
            console.log(user.body);
            this.router.navigate(['/myProfile']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.errorMessage = 'invalid phone number or password';
          }
          if (err.status == 406) {
            this.router.navigate(['/smsVerification', err.error.userId, 'true']);
          }
        }
      );
    }
  }
}
