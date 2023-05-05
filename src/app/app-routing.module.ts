import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/pages/auth/signup/signup.component'
import { HomeComponent } from './components/pages/home/home.component'

const routes: Routes = [
   { path : 'register', component : SignupComponent},
   { path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
