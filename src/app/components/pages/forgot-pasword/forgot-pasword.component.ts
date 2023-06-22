import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.css'],
})
export class ForgotPaswordComponent {
  public errorMessage;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.errorMessage = '';
  }

  phoneNumberForm = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern('^0[0-9]{9}$')]],
  });
  get phoneNumber() {
    return this.phoneNumberForm.get('phoneNumber');
  }

  onSubmit(): void {
    if (!this.phoneNumberForm.invalid) {
      this.authService.forgotPassword(this.phoneNumberForm.value).subscribe(
        (user) => {
          if (user.status == 202) {
            this.router.navigate(['/smsVerification', user.body.userId, 'forgotPass']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status == 400) {
            this.errorMessage = 'invalid phone number ';
          }
        }
      );
    }
  }
}
