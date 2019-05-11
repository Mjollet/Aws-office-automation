import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {MyLoginComponent} from './my-login/my-login.component';


const routes: Routes = [
  { path: 'user', component: AppComponent },
  { path: 'login', component: MyLoginComponent },
  {path : '', component : MyLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
