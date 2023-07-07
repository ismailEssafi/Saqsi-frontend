import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SmsVerificationComponent } from './components/pages/sms-verification/sms-verification.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { ServerNotRespondingComponent } from './components/pages/server-not-responding/server-not-responding.component';
import { ForgotPaswordComponent } from './components/pages/forgot-pasword/forgot-pasword.component';

import { AppInterceptor } from './interceptors/app.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SmsVerificationComponent,
    MyProfileComponent,
    SigninComponent,
    ServerNotRespondingComponent,
    ForgotPaswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    FeedbacksComponent,
    RatingStarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
