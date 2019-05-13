import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {AuthComponent} from './auth/auth.component';
import {MyNavComponent} from './my-nav/my-nav.component';


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
