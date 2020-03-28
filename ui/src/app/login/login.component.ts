import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {}
  constructor(private _auth : AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    //request to auth service
    this._auth.generateJWT(this.userData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
      },
      err => console.log(err)
    );

    //navigate to dashboard
    this.router.navigateByUrl("/dashboard");
    
  }
}
