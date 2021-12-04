import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginUser() {
   
    if (this.username === 'admin' && this.password === 'admin123') {
      console.log("Valid Credentials");
      this.router.navigateByUrl('/admin');
    } else {
      alert("Please check your login credentials and try again")

    }
  }

}
