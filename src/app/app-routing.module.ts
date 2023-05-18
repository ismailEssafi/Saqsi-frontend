import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/pages/signup/signup.component'
import { HomeComponent } from './components/pages/home/home.component'
import { SmsVerificationComponent } from './components/pages/sms-verification/sms-verification.component'

const routes: Routes = [
   { path : 'register', component : SignupComponent},
   { path : 'smsVerification', component : SmsVerificationComponent},
   { path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
