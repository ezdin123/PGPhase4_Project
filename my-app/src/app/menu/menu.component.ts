import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string = "Mary Smith";
  shippingAddress: string;

  changeName() {
  this.name = "Bill Smart";
  }
  // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn =this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
