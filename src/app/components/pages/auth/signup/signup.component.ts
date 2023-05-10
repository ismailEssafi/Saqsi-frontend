import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private authService : AuthService){}

  registerForm = this.fb.group({
    fullname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    password: ['', [Validators.required, Validators.minLength(10)]]
  }) 
  get fullname() { return this.registerForm.get('fullname')};
  get phoneNumber() { return this.registerForm.get('phoneNumber')};
  get password() { return this.registerForm.get('password')};

  onSubmit() : void{
    if (!this.registerForm.invalid){
      console.log(this.registerForm.value)
      this.authService.register();
    }
  }

  
}
