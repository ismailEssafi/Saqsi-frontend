import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SmsVerificationComponent } from './components/pages/sms-verification/sms-verification.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { ServerNotRespondingComponent } from './components/pages/server-not-responding/server-not-responding.component';
import { ForgotPaswordComponent } from './components/pages/forgot-pasword/forgot-pasword.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { EditProImgsComponent } from './components/edit-pro-imgs/edit-pro-imgs.component';
import { UpdateProfileinfoComponent } from './components/update-profileinfo/update-profileinfo.component';

import { AppInterceptor } from './interceptors/app.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


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
    ImgSliderComponent,
    EditProImgsComponent,
    UpdateProfileinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgImageSliderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
