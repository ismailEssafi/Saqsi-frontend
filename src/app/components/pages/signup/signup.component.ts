import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    fullname: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')],
    ],
    phoneNumber: ['', [Validators.required, Validators.pattern('^0[0-9]{9}$')]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });
  get fullname() {
    return this.registerForm.get('fullname');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit(): void {
    if (!this.registerForm.invalid) {
      this.authService.register(this.registerForm.value).subscribe((user) => {
        if (user.status == 201) {
          this.router.navigate([
            '/smsVerification',
            user.body.userId,
            'register',
          ]);
        }
      });
    }
  }
}
