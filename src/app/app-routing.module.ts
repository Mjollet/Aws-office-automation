import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {AuthComponent} from './auth/auth.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';

const routes: Routes = [{
  path: "profile",
  component: ProfileComponent
},
{
  path: "login",
  component: AuthComponent
},

{
  path:'my-nav',
  component: MyNavComponent },

{
  path:'first-page',
  component: FirstPageComponent },

{
  path:'second-page',
  component: SecondPageComponent },
  


  
 {path:'**',
 redirectTo: 'login',
 pathMatch: 'full'
 },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
