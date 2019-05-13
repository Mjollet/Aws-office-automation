import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { CustomMaterialModule } from './material.module';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md'; 



const appRoutes: Routes = [
  { path: 'first-page' , component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatDialogModule,
    AmplifyAngularModule,
    MDBBootstrapModule 
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
