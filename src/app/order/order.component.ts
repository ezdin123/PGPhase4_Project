import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public ordersForm: FormGroup;
  public products: any;
  public orders: any;
  public users: any;
  public uname: String;
  cartItems = [];
  username:String;
 // @Input() productItem: Products

  constructor(private apiService: ApiService, private router: Router, private msg: MessengerService) { }

  ngOnInit(): void {
    this.uname = sessionStorage.getItem("username");

    // load get all products
    this.getAllProducts();

  }
  public getAllProducts() {
    this.apiService.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  details(p_id) {
    this.router.navigateByUrl('/products/details/' + p_id);
  }

  addtocart(p_id) {
    console.log(this.uname);
    console.log(p_id);
    this.msg.sendMsg(this.products);
   this.apiService.addOrders(p_id);
  // this.router.navigateByUrl('/userorders/');

  }

   checkout() {
     this.router.navigateByUrl('/checkout');
   }

}
