import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomMaterialModule } from './material.module';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { AuthComponent } from './auth/auth.component';
import {HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 



const appRoutes: Routes = [
  { path: 'first-page' , component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'profile-page', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
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
    MDBBootstrapModule.forRoot() 
  ],
  providers: [AmplifyService, AppComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
