import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SmsVerificationComponent } from './components/pages/sms-verification/sms-verification.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { ServerNotRespondingComponent } from './components/pages/server-not-responding/server-not-responding.component';
import { ForgotPaswordComponent } from './components/pages/forgot-pasword/forgot-pasword.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'forgotPasword', component: ForgotPaswordComponent },
  { path: 'resetPasword/:codeOTP', component: ResetPasswordComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'smsVerification/:userId/:from',
    component: SmsVerificationComponent,
  },
  { path: 'Server-Not-Responding', component: ServerNotRespondingComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
