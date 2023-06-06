import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sms-verification',
  templateUrl: './sms-verification.component.html',
  styleUrls: ['./sms-verification.component.css'],
})
export class SmsVerificationComponent {
  private userId;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    this.userId = 0;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => (this.userId = params['userId']));
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
      this.authService.smsVerification(otpInfo).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
