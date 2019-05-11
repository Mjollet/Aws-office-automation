import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material' 

//Cognito
import { AuthorizationService } from ''./authorization.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {
  usernameVerificationMessage: boolean = false;

  constructor(private auth: AuthorizationService,
    private router: Router) { }

  
  username: string;
  password: string;

  ngOnInit() {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }

  onSubmit(form: NgForm) {

      const username = form.value.username;
      const password = form.value.password;

      this.auth.auth.signIn(username,password).subscribe((data) => {
        this.router.navigateByUrl('/');
      }, (err)=> {
        this.usernameVerificationMessage = true;
      
      })
  }
  
}
