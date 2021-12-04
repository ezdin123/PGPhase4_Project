import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

 
  uname: String;
  upass: String;
  user: any;
  message = '';
  n: String;
  p: String;
  u: string;

  constructor(private apiservice: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  Login() {

    /*
    console.log(this.uname);
    console.log(this.upass);
    this.apiservice.findUserByUnameandUPass(this.uname, this.upass).subscribe(
      data => {
        console.log("Its a match");
        this.router.navigateByUrl('/order/' + this.uname)
      },
      error => {
        console.log("Exception occurred");
        this.message = "Bad Credentials, please try again";
      });
  }*/

  console.log(this.uname);
    sessionStorage.setItem('username', JSON.stringify(this.uname));
    (sessionStorage['username'])
    this.router.navigateByUrl('/order/' + this.uname)


  }

}
