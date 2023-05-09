import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullname: string = 'test';
  phoneNumber: string = '';
  password: string = '';

  onSubmit() : void{
    console.log(this.fullname)
    console.log(this.phoneNumber)
    console.log(this.password)
  }

  
}
