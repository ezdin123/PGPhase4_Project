import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  products :any;
  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    // load get all products
    this.getAllProducts();
  }

  public getAllProducts(){
    this.apiservice.getAllProducts().subscribe( data => {
    console.log(data);
      this.products = data;
    });
  }

  create(){
    this.router.navigateByUrl('/create');
  }

  details(p_id){
    this.router.navigateByUrl('/products/details/'+p_id);
  }

  delete(id){
    this.apiservice.deleteProductById(id).subscribe(res =>{
      this.router.navigateByUrl('/admin');
    })
  }

  edit(id){
      this.router.navigateByUrl('updateproduct/'+id);
      this.apiservice.getOneProduct(id).subscribe( data => {
        console.log(data);
          this.products = data;
        });
      }
        
     
  

}
