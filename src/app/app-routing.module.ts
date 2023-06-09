import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/pages/signup/signup.component'
import { HomeComponent } from './components/pages/home/home.component'
import { SmsVerificationComponent } from './components/pages/sms-verification/sms-verification.component'
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { SigninComponent} from './components/pages/signin/signin.component';

const routes: Routes = [
   { path : 'myProfile', component : MyProfileComponent},
   { path : 'login', component : SigninComponent},
   { path : 'register', component : SignupComponent},
   { path : 'smsVerification/:userId/:isFromLogin', component : SmsVerificationComponent},
   { path : 'home', component : HomeComponent},
   { path : '', component : HomeComponent},
   { path : '**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
