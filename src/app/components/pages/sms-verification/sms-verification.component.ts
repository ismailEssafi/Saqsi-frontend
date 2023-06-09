import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sms-verification',
  templateUrl: './sms-verification.component.html',
  styleUrls: ['./sms-verification.component.css'],
})
export class SmsVerificationComponent {
  private userId;
  private isFromLogin;
  public errorMessage;
  public goodMessage;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userId = 0;
    this.isFromLogin = '';
    this.errorMessage = '';
    this.goodMessage = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.isFromLogin = params['isFromLogin'];
    });
  }
  smsForm = this.fb.group({
    input1: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input2: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input3: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input4: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
  });
  get input1() {
    return this.smsForm.get('input1');
  }
  get input2() {
    return this.smsForm.get('input2');
  }
  get input3() {
    return this.smsForm.get('input3');
  }
  get input4() {
    return this.smsForm.get('input4');
  }

  onSubmit() {
    if (this.smsForm.valid) {
      const otpInfo = {
        userId: this.userId,
        codeOTP: `${this.smsForm.get('input1')?.value}${
          this.smsForm.get('input2')?.value
        }${this.smsForm.get('input3')?.value}${
          this.smsForm.get('input4')?.value
        }`,
      };
      this.authService.smsVerification(otpInfo).subscribe(
        (response) => {
          if (response.status == 202) {
            if (this.isFromLogin == 'true') {
              console.log(this.isFromLogin);
              this.router.navigate(['']);
            } else {
              this.router.navigate(['/login']);
            }
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status == 400 && err.error.message == 'invalid_otp') {
            this.errorMessage =
              'you insert the wrong sms code Please try again';
          }
          if (err.status == 400 && err.error.message == 'otp_expired') {
            this.errorMessage =
              'your sms code is expire, We sent new one Please check your phone';
          }
        }
      );
    }
  }
  resendOTP() {
    this.authService.resendOTP(this.userId).subscribe((response) => {
      if (response.status == 200) {
        this.goodMessage = 'we resend sms code';
      }
    });
  }
}
