import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-sms-verification',
  templateUrl: './sms-verification.component.html',
  styleUrls: ['./sms-verification.component.css']
})
export class SmsVerificationComponent {

  constructor(private fb: FormBuilder){}
  
  smsForm = this.fb.group({
    input1: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input2: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input3: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    input4: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
  }) 
  get input1() { return this.smsForm.get('input1')};
  get input2() { return this.smsForm.get('input2')};
  get input3() { return this.smsForm.get('input3')};
  get input4() { return this.smsForm.get('input4')};

  onSubmit(){
    if(this.smsForm.valid){
      console.log(this.smsForm.value)
    }
  }
}
