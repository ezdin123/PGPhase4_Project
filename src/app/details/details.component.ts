import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }
  public id: string ;
  products:any;

  ngOnInit(): void {
    this.route.params.subscribe(params=>{ 
       console.log(params);
      this.id= params.id;
      this.apiService.getOneProduct(this.id).subscribe(data=>{
         console.log(data);
        this.products = data;
      })
    });

  }

  img3 = "./assets/images/detail.jpg"


}
