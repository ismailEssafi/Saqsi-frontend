import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetPassForm: FormGroup;
  public errorMessage;
  public resetPasswordInfo = {userId : '', codeOTP : '', password : ''};
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.errorMessage = '';
    this.resetPassForm = fb.group(
      {
        password: fb.control('', [
          Validators.required,
          Validators.minLength(10),
          
        ]),
        confirmePassword: fb.control('', [
          Validators.required,
          Validators.minLength(10),
        ]),
      },
    );
    this.resetPassForm.addValidators(
      this.compareValidator(
        this.resetPassForm.get('password'),
        this.resetPassForm.get('confirmePassword')
      )
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.resetPasswordInfo.userId = params['userId'];
      this.resetPasswordInfo.codeOTP = params['codeOTP'];
    });
  }

  get password() {
    return this.resetPassForm.get('password');
  }
  get confirmePassword() {
    return this.resetPassForm.get('confirmePassword');
  }

  onSubmit(): void {
    if (!this.resetPassForm.invalid) {
      this.resetPasswordInfo.password= this.resetPassForm.get('password')?.value
      this.authService.resetPassword(this.resetPasswordInfo).subscribe(
        (user) => {
          if (user.status == 202) {
            this.router.navigate(['/home']);
          }
        }
      );
    }
  }

  compareValidator(controlOne: any, controlTwo: any) {
    return () => {
      if (controlOne.value !== controlTwo.value)
        return { match_error: 'no_match' };
      return null;
    };
  }
}
