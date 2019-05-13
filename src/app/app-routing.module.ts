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
// {path:'**',
// redirectTo: 'login',
// pathMatch: 'full'
// }
{
  path:'my-nav',
  component: MyNavComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
